from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Temporary in-memory database
skills = [
    {"id": 1, "name": "React", "progress": 50, "hours_spent": 10},
    {"id": 2, "name": "Flask", "progress": 70, "hours_spent": 15}
]

# Get all skills
@app.route('/skills', methods=['GET'])
def get_skills():
    return jsonify(skills), 200

# Add a new skill
@app.route('/skills', methods=['POST'])
def add_skill():
    data = request.get_json()
    new_skill = {
        "id": len(skills) + 1,
        "name": data['name'],
        "progress": data['progress'],
        "hours_spent": data['hours_spent']
    }
    skills.append(new_skill)
    return jsonify(new_skill), 201

# Update a skill
@app.route('/skills/<int:skill_id>', methods=['PUT'])
def update_skill(skill_id):
    data = request.get_json()
    for skill in skills:
        if skill['id'] == skill_id:
            skill['name'] = data['name']
            skill['progress'] = data['progress']
            skill['hours_spent'] = data['hours_spent']
            return jsonify(skill), 200
    return jsonify({"error": "Skill not found"}), 404

# Delete a skill
@app.route('/skills/<int:skill_id>', methods=['DELETE'])
def delete_skill(skill_id):
    global skills
    skills = [skill for skill in skills if skill['id'] != skill_id]
    return jsonify({"message": "Skill deleted"}), 200

# Health check
@app.route('/', methods=['GET'])
def home():
    return "Skill Tracker Backend is running!"

# Main entry point
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # Railway provides PORT env variable
    app.run(host='0.0.0.0', port=port)