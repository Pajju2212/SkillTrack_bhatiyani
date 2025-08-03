// src/api.js
import axios from "axios";

const API_BASE_URL = "https://skilltrack-bhatiyani-1.onrender.com";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getSkills = () => api.get("/skills");
export const addSkill = (skill) => api.post("/skills", skill);
export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);