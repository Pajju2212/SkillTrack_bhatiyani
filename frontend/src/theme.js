// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#2E026D", // Purple gradient base
      paper: "rgba(59, 0, 102, 0.6)", // Glass card
    },
    primary: {
      main: "#FF4FF6", // Neon pink
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#D1C4E9",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h4: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;