import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import GradientButton from "./components/GradientButton";
import { getSkills, addSkill, deleteSkill, updateSkill } from "./api";
import SkillChart from "./components/SkillChart";

function App() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: "", progress: "", hours_spent: "" });

  // Edit dialog state
  const [editOpen, setEditOpen] = useState(false);
  const [editSkill, setEditSkill] = useState({ id: null, name: "", progress: "", hours_spent: "" });

  // Fetch skills on component load
  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await getSkills();
      setSkills(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add Skill
  const handleAddSkill = async () => {
    if (!newSkill.name || !newSkill.progress || !newSkill.hours_spent) return;
    await addSkill(newSkill);
    setNewSkill({ name: "", progress: "", hours_spent: "" });
    fetchSkills();
  };

  // Delete Skill
  const handleDeleteSkill = async (id) => {
    await deleteSkill(id);
    fetchSkills();
  };

  // Open Edit Dialog
  const handleOpenEdit = (skill) => {
    setEditSkill(skill);
    setEditOpen(true);
  };

  // Save Edited Skill
  const handleSaveEdit = async () => {
    await updateSkill(editSkill.id, {
      name: editSkill.name,
      progress: editSkill.progress,
      hours_spent: editSkill.hours_spent,
    });
    setEditOpen(false);
    fetchSkills();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", // Change if needed
        backgroundSize: "400% 400%",
        animation: "gradientMove 15s ease infinite",
        paddingY: 4,
      }}
    >
      <Container>
        {/* Title */}
        <Typography variant="h4" align="center" gutterBottom sx={{ color: "#fff" }}>
          Skill Tracker
        </Typography>

        {/* Chart */}
        <Box sx={{ maxWidth: 400, margin: "0 auto", mb: 4 }}>
          <SkillChart skills={skills} />
        </Box>

        {/* Input Form */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            marginBottom: 4,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Skill Name"
            variant="outlined"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1, input: { color: "#fff" }, label: { color: "#fff" } }}
          />
          <TextField
            label="Progress %"
            variant="outlined"
            type="number"
            value={newSkill.progress}
            onChange={(e) => setNewSkill({ ...newSkill, progress: e.target.value })}
            sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1, input: { color: "#fff" }, label: { color: "#fff" } }}
          />
          <TextField
            label="Hours Spent"
            variant="outlined"
            type="number"
            value={newSkill.hours_spent}
            onChange={(e) => setNewSkill({ ...newSkill, hours_spent: e.target.value })}
            sx={{ backgroundColor: "rgba(255,255,255,0.1)", borderRadius: 1, input: { color: "#fff" }, label: { color: "#fff" } }}
          />
          <GradientButton onClick={handleAddSkill}>Add Skill</GradientButton>
        </Box>

        {/* Skill Cards */}
        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.id}>
              <Card
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#fff" }}>{skill.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#ddd" }}>Progress: {skill.progress}%</Typography>
                  <Typography variant="body2" sx={{ color: "#ddd" }}>Hours: {skill.hours_spent}</Typography>
                  <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                    <GradientButton onClick={() => handleOpenEdit(skill)}>Edit</GradientButton>
                    <GradientButton onClick={() => handleDeleteSkill(skill.id)}>Delete</GradientButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Edit Dialog */}
        <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
          <DialogTitle>Edit Skill</DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Skill Name"
              value={editSkill.name}
              onChange={(e) => setEditSkill({ ...editSkill, name: e.target.value })}
            />
            <TextField
              label="Progress %"
              type="number"
              value={editSkill.progress}
              onChange={(e) => setEditSkill({ ...editSkill, progress: e.target.value })}
            />
            <TextField
              label="Hours Spent"
              type="number"
              value={editSkill.hours_spent}
              onChange={(e) => setEditSkill({ ...editSkill, hours_spent: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <GradientButton onClick={() => setEditOpen(false)}>Cancel</GradientButton>
            <GradientButton onClick={handleSaveEdit}>Save</GradientButton>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default App;