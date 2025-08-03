// src/api.js
import axios from "axios";

const API_BASE_URL = "https://skilltrack-bhatiyani-1.onrender.com";


export const getSkills = () => api.get("/skills");
export const addSkill = (skill) => api.post("/skills", skill);
export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);