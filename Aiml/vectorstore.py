# aiml/vector_store.py
import os
from typing import List, Dict, Any
import pinecone
from embeddings import get_embedding, batch_embeddings

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENV = os.getenv("PINECONE_ENV")
INDEX_NAME = os.getenv("PINECONE_INDEX", "alumni-index")

_initialized = False

def init_pinecone():
    global _initialized
    if _initialized:
        return
    if not PINECONE_API_KEY or not PINECONE_ENV:
        raise RuntimeError("Pinecone credentials (PINECONE_API_KEY, PINECONE_ENV) are required")
    pinecone.init(api_key=PINECONE_API_KEY, environment=PINECONE_ENV)
    _initialized = True

def ensure_index(dim: int, metric: str = "cosine"):
    init_pinecone()
    existing = pinecone.list_indexes()
    if INDEX_NAME not in existing:
        pinecone.create_index(name=INDEX_NAME, dimension=dim, metric=metric)

def upsert_profiles(profiles: List[Dict[str, Any]], id_key: str = "id"):
    """
    profiles: each must contain 'id' or id_key and optionally 'text' and 'meta'.
    'text' is the string to embed; if missing, basic fields will be joined.
    """
    if not profiles:
        return
    init_pinecone()

    texts = []
    ids = []
    metas = []
    for p in profiles:
        idx = str(p.get(id_key) or p.get("id"))
        ids.append(idx)
        text = p.get("text")
        if not text:
            # compose text from common keys
            parts = []
            for k in ("name", "title", "company", "skills", "bio"):
                v = p.get(k)
                if v:
                    if isinstance(v, list):
                        parts.append(", ".join(v))
                    else:
                        parts.append(str(v))
            text = " | ".join(parts)
        texts.append(text)
        metas.append(p.get("meta", {**{k: p.get(k) for k in ('name','title','company','skills','experienceYears','verified','bio')}}))

    embeddings = batch_embeddings(texts)
    dim = len(embeddings[0])
    ensure_index(dim)
    index = pinecone.Index(INDEX_NAME)

    # build vectors for upsert
    vectors = [(ids[i], embeddings[i], metas[i]) for i in range(len(ids))]

    # upsert in chunks
    chunk = 100
    for i in range(0, len(vectors), chunk):
        batch = vectors[i:i+chunk]
        index.upsert(vectors=batch)

def query_similar_by_text(text: str, top_k: int = 5, include_meta: bool = True) -> List[Dict[str, Any]]:
    init_pinecone()
    emb = get_embedding(text)
    return query_similar_by_embedding(emb, top_k=top_k, include_meta=include_meta)

def query_similar_by_embedding(embedding: List[float], top_k: int = 5, include_meta: bool = True) -> List[Dict[str, Any]]:
    init_pinecone()
    index = pinecone.Index(INDEX_NAME)
    res = index.query(vector=embedding, top_k=top_k, include_metadata=include_meta)
    out = []
    # handle both dict/list formats returned by pinecone SDK
    matches = res.get("matches", []) if isinstance(res, dict) else res.matches
    for m in matches:
        out.append({"id": m["id"], "score": m["score"], "metadata": m.get("metadata")})
    return out
