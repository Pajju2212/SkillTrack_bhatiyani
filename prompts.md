# Prompts Documentation

This file documents the AI prompts and guidance used during the development of the Skill Tracker project. It demonstrates the iterative design and development process, transparency, and modern workflow methodology.

---

## 1. Initial Project Setup
**Prompt:**
> "Guide me to build a skill tracking web app with React frontend, Flask backend, and CRUD operations with a chart overview."

**Outcome:**
- Generated base architecture with `frontend` (React) and `backend` (Flask).
- Setup REST API endpoints for skills (GET, POST, DELETE).

---

## 2. Fixing JSON Server & API Errors
**Prompt:**
> "JSON Server gives URI malformed and blank screen, help me debug and fix."

**Outcome:**
- Debugged API route conflicts.
- Removed duplicate endpoint mappings.
- Connected frontend with proper Axios methods.

---

## 3. Adding Material UI (MUI) Styling
**Prompt:**
> "Current design with white background and black buttons looks plain. Act as world-class UI/UX designer and create better design using Material UI with gradients and modern aesthetics."

**Outcome:**
- Introduced gradient backgrounds.
- Styled cards with shadows and glassmorphism effect.
- Created reusable `GradientButton` component.

---

## 4. Chart Integration
**Prompt:**
> "Integrate bar chart to show skill progress visually using React Chart.js."

**Outcome:**
- Implemented `SkillChart` component.
- Dynamically updates when skills are added/deleted.

---

## 5. Final Polish & Background Enhancement
**Prompt:**
> "Add professional gradient background, organize layout for recruiters to be impressed."

**Outcome:**
- Added animated gradient background.
- Improved spacing, typography, and responsiveness.

---

## Why Document Prompts?
Including this file demonstrates:
- Problem-solving approach
- Iterative improvements
- Ability to leverage AI tools professionally