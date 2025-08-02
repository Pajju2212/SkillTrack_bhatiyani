// src/components/GradientButton.js
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #FF4FF6 0%, #E640E3 100%)",
  color: "#fff",
  borderRadius: "8px",
  padding: "10px 20px",
  fontWeight: 600,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 15px rgba(255,79,246,0.6)",
    background: "linear-gradient(135deg, #E640E3 0%, #FF4FF6 100%)",
  },
}));

export default GradientButton;