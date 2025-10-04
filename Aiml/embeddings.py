# aiml/embeddings.py
import os
from typing import List
import openai

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
EMBEDDING_MODEL = os.getenv("OPENAI_EMBEDDING_MODEL", "text-embedding-3-small")

if OPENAI_API_KEY:
    openai.api_key = OPENAI_API_KEY

def get_embedding(text: str) -> List[float]:
    """
    Returns embedding vector for a single string using OpenAI embeddings API.
    Uses model defined in OPENAI_EMBEDDING_MODEL (default: text-embedding-3-small).
    """
    if not openai.api_key:
        raise RuntimeError("OPENAI_API_KEY not set")

    response = openai.Embedding.create(model=EMBEDDING_MODEL, input=text)
    return response["data"][0]["embedding"]

def batch_embeddings(texts: List[str], batch_size: int = 16) -> List[List[float]]:
    """Compute embeddings for a list of texts in batches (returns list of lists)."""
    if not openai.api_key:
        raise RuntimeError("OPENAI_API_KEY not set")
    outs = []
    for i in range(0, len(texts), batch_size):
        chunk = texts[i:i+batch_size]
        resp = openai.Embedding.create(model=EMBEDDING_MODEL, input=chunk)
        for d in resp["data"]:
            outs.append(d["embedding"])
    return outs
