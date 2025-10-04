# aiml/llm_utils.py
import os
import openai
from typing import Dict, Any

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
CHAT_MODEL = os.getenv("OPENAI_CHAT_MODEL", "gpt-4o-mini")
if OPENAI_API_KEY:
    openai.api_key = OPENAI_API_KEY

def generate_explanation(student: Dict[str, Any], alumni: Dict[str, Any], max_tokens: int = 80) -> str:
    """
    Generate a short explanation why an alumni is a good match using OpenAI Chat API.
    """
    if not openai.api_key:
        return ""
    prompt = f"Student profile:\n{student}\n\nAlumni profile:\n{alumni}\n\nWrite a concise (1-2 sentence) explanation why the alumni is a good mentor match for the student."
    resp = openai.ChatCompletion.create(
        model=CHAT_MODEL,
        messages=[
            {"role":"system","content":"You are an assistant that summarizes mentor matches succinctly."},
            {"role":"user","content":prompt}
        ],
        max_tokens=max_tokens,
        temperature=0.2
    )
    text = resp["choices"][0]["message"]["content"].strip()
    return text
