# AIML Engine - Alumni Management Platform

This folder contains AIML modules for embeddings, Pinecone vector store, simple TF re-ranker, LLM utilities, and a local test harness.

**How to use**
1. Copy `aiml/.env.example` → `aiml/.env` and fill keys.
2. `python -m venv .venv && source .venv/bin/activate`
3. `pip install -r aiml/requirements.txt`
4. Run local test: `python -m aiml.test_runner` (requires OpenAI + Pinecone keys)

**Entry points for backend integration (Cursor AI)**
- `matcher.match_student(student_dict, top_k=5)` → returns list of candidate dicts with scores & explanations.
- `vector_store.upsert_profiles(profiles_list)` → upsert alumni profiles into Pinecone.
- `vector_store.query_similar_by_text(text, top_k)` → search by text.

Backend should import these functions and expose HTTP endpoints. Do not expose keys to frontend.
