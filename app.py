from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoTokenizer, TFAutoModelForQuestionAnswering
import tensorflow as tf
import numpy as np

# Initialize FastAPI
app = FastAPI()

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
model = TFAutoModelForQuestionAnswering.from_pretrained("bert-base-uncased")

# Define request schema
class QuestionRequest(BaseModel):
    question: str
    context: str = "Agriculture-related information goes here"

# Define chatbot response function
def chatbot_response(user_input, context="Agriculture-related information goes here"):
    # Prepare the input
    input_text = f"{context}\n\nUser: {user_input}\n\nChatbot:"
    inputs = loaded_tokenizer(input_text, return_tensors="tf")

    # Generate a response
    output_sequences = loaded_model.generate(
        input_ids=inputs["input_ids"],
        max_length=100,  # Adjust as needed
        temperature=0.7,  # Control randomness
        top_k=50,
        top_p=0.9,
        do_sample=True  # Enables diverse responses
    )

    # Decode the generated text
    response = loaded_tokenizer.decode(output_sequences[0], skip_special_tokens=True)

    # Extract only the chatbot's response (optional, to clean up output)
    response = response.split("Chatbot:")[-1].strip()

    return response

# Example Usage
print(chatbot_response("What are the best crops for dry seasons?"))

# API endpoint
@app.post("/chatbot")
async def get_answer(request: QuestionRequest):
    response = chatbot_response(request.question, request.context)
    return {"answer": response}

# Run server with: uvicorn app:app --reload
