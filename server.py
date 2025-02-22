from flask import Flask, jsonify
from flask_restful import reqparse, Api, Resource
from flask_cors import CORS

# Create flask instance

app = Flask(__name__)
CORS(app)

@app.route("/api/home/", methods=["GET", "POST"])
def return_home():
    return jsonify({
        "message": "Hello world!!!!!!!!!!!!!!!!!!!!"
    })

@app.route("/http://localhost:3000/", methods=["POST", "GET"])
def process():
    return jsonify({
        "message": "Hello world!!!!!!!!!!!!!!!!!!!!"
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)