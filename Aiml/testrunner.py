# aiml/test_runner.py
"""
Run locally to validate the pipeline (requires valid .env in aiml/).
Usage:
    cd project_root
    python -m aiml.test_runner
"""
import os
from dotenv import load_dotenv
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), ".env"))

from aiml.data_utils import load_alumni_csv
from aiml.vector_store import upsert_profiles
from aiml.matcher import match_student

def create_sample_csv(path):
    import pandas as pd
    df = pd.DataFrame([
        {"id":"al-1","name":"Asha Menon","title":"ML Engineer","company":"TechNova","skills":"Machine Learning, Python","experienceYears":6,"verified":True,"bio":"ML specialist"},
        {"id":"al-2","name":"Rohit Sharma","title":"Data Scientist","company":"DataCo","skills":"NLP, TensorFlow, Python","experienceYears":4,"verified":True,"bio":"NLP focused"},
        {"id":"al-3","name":"Priya Kapoor","title":"Software Eng","company":"BuildIt","skills":"React, Node.js, Product","experienceYears":8,"verified":False,"bio":"Full-stack & product"}
    ])
    df.to_csv(path, index=False)

def main():
    base = os.path.dirname(__file__)
    sample_csv = os.path.join(base, "sample_alumni.csv")
    if not os.path.exists(sample_csv):
        create_sample_csv(sample_csv)
    print("Loading sample alumni...")
    profiles = load_alumni_csv(sample_csv)
    print("Upserting to Pinecone (ensure env set)...")
    upsert_profiles(profiles)
    student = {"name":"Test Student","skills":["python","machine learning"], "experienceYears":1}
    print("Querying matches...")
    matches = match_student(student, top_k=3)
    for m in matches:
        print("Match:", m)

if __name__ == "__main__":
    main()
