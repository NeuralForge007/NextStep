# aiml/data_utils.py
import pandas as pd
import uuid
from typing import List, Dict, Any

def load_alumni_csv(path: str) -> List[Dict[str, Any]]:
    """
    CSV expected columns: id,name,title,company,skills (comma-separated),experienceYears,verified,bio
    Returns list of profile dicts suitable for upsert_profiles()
    """
    df = pd.read_csv(path)
    out = []
    for _, r in df.iterrows():
        skills_raw = r.get("skills") or ""
        skills = [s.strip() for s in str(skills_raw).split(",") if s.strip()]
        rec = {
            "id": str(r.get("id") or uuid.uuid4()),
            "name": r.get("name"),
            "title": r.get("title"),
            "company": r.get("company"),
            "skills": skills,
            "experienceYears": int(r.get("experienceYears") or 0),
            "verified": bool(str(r.get("verified")).lower() in ["true","1","yes"]) if r.get("verified") is not None else False,
            "bio": r.get("bio") or "",
            "meta": {
                "name": r.get("name"),
                "title": r.get("title"),
                "company": r.get("company"),
                "skills": skills,
                "experienceYears": int(r.get("experienceYears") or 0),
                "verified": bool(str(r.get("verified")).lower() in ["true","1","yes"]) if r.get("verified") is not None else False,
                "bio": r.get("bio") or ""
            }
        }
        out.append(rec)
    return out
