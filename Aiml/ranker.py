# aiml/ranker.py
import os
import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models

MODEL_PATH = os.getenv("RE_RANKER_MODEL_PATH", "./models/ranker")

def build_ranker(input_dim: int = 16) -> tf.keras.Model:
    inp = layers.Input(shape=(input_dim,))
    x = layers.Dense(128, activation="relu")(inp)
    x = layers.Dropout(0.2)(x)
    x = layers.Dense(64, activation="relu")(x)
    out = layers.Dense(1, activation="sigmoid")(x)
    model = models.Model(inputs=inp, outputs=out)
    model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["AUC"])
    return model

def train_ranker(X: np.ndarray, y: np.ndarray, input_dim:int=16, epochs:int=10):
    model = build_ranker(input_dim)
    model.fit(X, y, epochs=epochs, batch_size=32, validation_split=0.1)
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    model.save(MODEL_PATH)
    return model

def load_ranker():
    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError("Ranker not found. Train first or set RE_RANKER_MODEL_PATH")
    return tf.keras.models.load_model(MODEL_PATH)

def score_candidates(feature_matrix):
    """
    feature_matrix: numpy array (n_candidates, input_dim)
    returns: list of floats scores
    """
    model = load_ranker()
    preds = model.predict(feature_matrix, verbose=0)
    return preds.flatten().tolist()
