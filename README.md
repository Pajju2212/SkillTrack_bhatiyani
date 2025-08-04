# Skill Tracker

A **modern web application** to track your learning progress across multiple skills. Built with **React (frontend)**, **Flask (backend)**, and **Material UI** for a professional UI/UX. The app visualizes skill progress with interactive charts and provides full **CRUD functionality**.

---

## 🚀 Features

- **Add Skills** – Track new skills with name, progress %, and hours spent.
- **Visual Progress** – Clean skill cards + data visualization using Chart.js.
- **Delete Skills** – Remove unwanted skills with one click.
- **Modern UI** – Gradient backgrounds, Material UI components, and fully responsive design.

---
## Live URLs:

- **Frontend (React)**: https://darling-medovik-311d1f.netlify.app/

- **Backend (Flask on Railway)**: https://skilltrackbhatiyani-production.up.railway.app/

## 🛠 Tech Stack

**Frontend:**
- React
- Material UI
- Chart.js

**Backend:**
- Flask (Python)

**Database:**
- JSON (Demo) → Extendable to SQL/NoSQL

---

## 📂 Project Structure

SkillTrack_bhatiyani/
├── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ │ ├── GradientButton.js
│ │ │ └── SkillChart.js
│ │ ├── App.js
│ │ └── api.js
│ └── package.json
├── backend/ # Flask backend
│ ├── app.py
│ └── requirements.txt
├── prompts.md # AI prompts used during development
└── README.md # Project documentation


---

## ⚡ Installation & Setup

## 1. Backend (Flask)

cd backend
python -m venv venv
# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
pip install -r requirements.txt
python app.py

Runs at: http://127.0.0.1:5000

## 2. Frontend (React)
bash
Copy
Edit
cd frontend
npm install
npm start
Runs at: http://localhost:3000

## 🔗 API Endpoints
Get All Skills
http
Copy
Edit
GET /skills
Add Skill
http
Copy
Edit
POST /skills
{
  "name": "React",
  "progress": 50,
  "hours_spent": 10
}
Delete Skill
http
Copy
Edit
DELETE /skills/:id
## 🎯 Future Enhancements
Edit/Update skill progress

User authentication (login/signup)

Persistent database (PostgreSQL / MongoDB)

Dark/Light theme toggle

## 📜 License 
This project is for educational purposes and free to use.
