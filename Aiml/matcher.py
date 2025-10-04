# aiml/matcher.py
from typing import List, Dict, Any
from .vector_store import query_similar_by_text
from .embeddings import get_embedding
from .ranker import score_candidates
from .llm_utils import generate_explanation
import numpy as np

def _profile_to_text(profile: Dict[str, Any]) -> str:
    parts = []
    for k in ("name","title","company","skills","bio"):
        if profile.get(k):
            v = profile[k]
            if isinstance(v, list):
                parts.append(", ".join(v))
            else:
                parts.append(str(v))
    return " | ".join(parts)

def match_student(student: Dict[str, Any], top_k: int = 5, rerank: bool = True) -> List[Dict[str, Any]]:
    """
    1) Build student text and query Pinecone for more candidates
    2) Optionally rerank using the TF ranker
    3) Optionally create explanation via LLM
    Returns a list of candidate dicts: {id, score, meta, re_rank_score?, explanation?}
    """
    qtext = _profile_to_text(student)
    # request more candidates to allow reranking
    raw = query_similar_by_text(qtext, top_k=top_k*5, include_meta=True)
    if not raw:
        return []

    candidates = []
    for r in raw:
        candidates.append({"id": r["id"], "score": float(r["score"]), "meta": r.get("metadata", {})})

    if rerank:
        # build simple feature vectors for reranker
        features = []
        for c in candidates:
            pine_score = c.get("score", 0.0)
            cand_skills = [s.lower() for s in c["meta"].get("skills", [])] if c["meta"].get("skills") else []
            stud_skills = [s.lower() for s in (student.get("skills") or [])]
            overlap = len(set(cand_skills).intersection(stud_skills))
            exp_c = float(c["meta"].get("experienceYears") or 0)
            exp_s = float(student.get("experienceYears") or 0)
            exp_diff = abs(exp_c - exp_s) / max(1.0, exp_s + 1.0)
            verified = 1.0 if c["meta"].get("verified") else 0.0
            vec = [pine_score, overlap, exp_diff, verified] + [0.0]*12
            features.append(vec)
        X = np.array(features, dtype=float)
        try:
            scores = score_candidates(X)
            for i, c in enumerate(candidates):
                c["re_rank_score"] = float(scores[i])
            candidates.sort(key=lambda x: x.get("re_rank_score", x["score"]), reverse=True)
        except Exception as e:
            # fall back to pinecone score
            print("Rerank error:", e)

    final = candidates[:top_k]
    for c in final:
        try:
            c["explanation"] = generate_explanation(student, c["meta"])
        except Exception:
            c["explanation"] = ""
    return final
