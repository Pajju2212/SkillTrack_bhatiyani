# Skill Tracker

A modern web application to track learning progress for multiple skills. Built with **React (frontend)**, **Flask (backend)**, and **Material UI** for a professional UI/UX. Visualizes skill progress using charts and supports full CRUD functionality.

---

## Features
- **Add Skills**: Track new skills with name, progress %, and hours spent.
- **View Progress**: Display skills in clean cards and visualize data via charts.
- **Delete Skills**: Remove unwanted skills instantly.
- **Modern UI**: Gradient backgrounds, Material UI components, and responsive design.

---

## Tech Stack
- **Frontend**: React, Material UI, Chart.js
- **Backend**: Flask (Python)
- **Database**: In-memory / JSON (for demo; can extend to SQL/NoSQL)
- **Styling**: MUI + custom gradient CSS

---

## Project Structure
SkillTrack_bhatiyani/
│
├── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ │ ├── GradientButton.js
│ │ │ └── SkillChart.js
│ │ ├── App.js
│ │ └── api.js
│ └── package.json
│
├── backend/ # Flask backend
│ ├── app.py
│ └── requirements.txt
│
├── prompts.md # AI prompts used during development
└── README.md # Project documentation

---

## Installation & Setup

### **Backend (Flask)**
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py

Runs at: http://127.0.0.1:5000
Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Runs at: http://localhost:3000

API Endpoints
Get All Skills
bash
Copy
Edit
GET /skills
Add Skill
bash
Copy
Edit
POST /skills
{
  "name": "React",
  "progress": 50,
  "hours_spent": 10
}
Delete Skill
bash
Copy
Edit
DELETE /skills/<id>
Future Enhancements
Edit/Update skill progress

User authentication

Persistent database (PostgreSQL / MongoDB)

Dark/Light theme toggle

License
This project is for educational purposes and free to use.