from flask import Flask, request, jsonify
from flask_cors import CORS

# ----------------------------
# Initialize Flask App
# ----------------------------
# __name__ helps Flask locate resources like templates/static
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) so React frontend can talk to Flask backend
CORS(app)

# ----------------------------
# In-memory "database"
# (Temporary - resets if app restarts)
# ----------------------------
skills = [
    {"id": 1, "name": "React", "progress": 50, "hours_spent": 10},
    {"id": 2, "name": "Python", "progress": 70, "hours_spent": 20},
    {"id": 3, "name": "Java", "progress": 90, "hours_spent": 30}
]

# ----------------------------
# Helper Function: Find Skill by ID
# ----------------------------
def find_skill(skill_id):
    """Return skill dict if found, else None"""
    return next((s for s in skills if s["id"] == skill_id), None)


# ----------------------------
# ROUTE 1: Home Test Route
# ----------------------------
@app.route("/")
def home():
    """
    Default test route
    Used to check if API is running
    """
    return "SkillTrack API is running!"


# ----------------------------
# ROUTE 2: READ - Get all skills
# ----------------------------
@app.route("/skills", methods=["GET"])
def get_skills():
    """
    Fetch all skills
    Returns: List of skill objects (JSON)
    """
    return jsonify(skills)


# ----------------------------
# ROUTE 3: CREATE - Add new skill
# ----------------------------
@app.route("/skills", methods=["POST"])
def add_skill():
    """
    Add a new skill
    Expected JSON:
    {
      "name": "SkillName",
      "progress": 50,
      "hours_spent": 10
    }
    """
    data = request.get_json()

    # Basic validation
    if not data or "name" not in data or "progress" not in data or "hours_spent" not in data:
        return jsonify({"error": "Invalid data"}), 400

    # Auto-generate next ID
    new_id = max((s["id"] for s in skills), default=0) + 1
    new_skill = {
        "id": new_id,
        "name": data["name"],
        "progress": data["progress"],
        "hours_spent": data["hours_spent"]
    }

    # Add to skills list
    skills.append(new_skill)
    return jsonify(new_skill), 201


# ----------------------------
# ROUTE 4: UPDATE - Modify skill by ID
# ----------------------------
@app.route("/skills/<int:skill_id>", methods=["PUT"])
def update_skill(skill_id):
    """
    Update existing skill
    URL param: skill_id
    Expected JSON: same format as add_skill
    """
    skill = find_skill(skill_id)
    if not skill:
        return jsonify({"error": "Skill not found"}), 404

    data = request.get_json()
    skill["name"] = data.get("name", skill["name"])
    skill["progress"] = data.get("progress", skill["progress"])
    skill["hours_spent"] = data.get("hours_spent", skill["hours_spent"])

    return jsonify(skill)


# ----------------------------
# ROUTE 5: DELETE - Remove skill by ID
# ----------------------------
@app.route("/skills/<int:skill_id>", methods=["DELETE"])
def delete_skill(skill_id):
    """
    Delete a skill by ID
    URL param: skill_id
    """
    skill = find_skill(skill_id)
    if not skill:
        return jsonify({"error": "Skill not found"}), 404

    skills.remove(skill)
    return jsonify({"message": "Skill deleted"})


# ----------------------------
# Run Flask app
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)