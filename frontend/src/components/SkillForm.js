// src/components/SkillForm.js
import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

export default function SkillForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    progress: "",
    hours_spent: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.progress || !formData.hours_spent) return;
    onAdd({
      name: formData.name,
      progress: parseInt(formData.progress),
      hours_spent: parseInt(formData.hours_spent),
    });
    setFormData({ name: "", progress: "", hours_spent: "" });
  };

  return (
    <Paper sx={{ p: 3, mb: 3, bgcolor: "#1e1e1e", color: "#fff" }}>
      <Box
        component="form"
        display="flex"
        gap={2}
        flexWrap="wrap"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Skill Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: "#bbb" } }}
          sx={{
            input: { color: "#fff" },
          }}
        />
        <TextField
          label="Progress (%)"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: "#bbb" } }}
          sx={{
            input: { color: "#fff" },
          }}
        />
        <TextField
          label="Hours Spent"
          name="hours_spent"
          value={formData.hours_spent}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ style: { color: "#bbb" } }}
          sx={{
            input: { color: "#fff" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#1976d2",
            "&:hover": { bgcolor: "#1565c0" },
          }}
        >
          Add Skill
        </Button>
      </Box>
    </Paper>
  );
}
