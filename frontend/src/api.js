// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000",
});

export const getSkills = () => api.get("/skills");
export const addSkill = (skill) => api.post("/skills", skill);
export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);