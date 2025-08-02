// src/components/SkillCard.js
import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function SkillCard({ skill, onEdit, onDelete }) {
  return (
    <Card
      sx={{
        bgcolor: "#2c2c2c",
        color: "#fff",
        mb: 2,
        p: 2,
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography variant="h6">{skill.name}</Typography>
        <Typography>Progress: {skill.progress}%</Typography>
        <Typography>Hours: {skill.hours_spent}</Typography>
        <Box mt={2} display="flex" gap={1}>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => onEdit(skill)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(skill.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}