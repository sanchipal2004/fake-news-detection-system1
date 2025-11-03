import sys
import json
import joblib


model = joblib.load("model.pkl")
vectoriser= joblib.load("vectorizer.pkl")

# Take text from Node.js argument
text = sys.argv[1]

x_vec= vectoriser.transform([text])
prediction = model.predict(x_vec)[0]
confidence = model.predict_proba(x_vec).max() * 100

result = {
    "label": "Real" if prediction == 1 else "Fake",
    "confidence": round(confidence, 2),
    "explanation": "Prediction made using trained ML model."
}

print(json.dumps(result))