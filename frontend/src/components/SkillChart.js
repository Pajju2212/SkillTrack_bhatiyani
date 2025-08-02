import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SkillChart = ({ skills }) => {
  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Progress (%)",
        data: skills.map((skill) => skill.progress),
        backgroundColor: "rgba(255, 255, 255, 0.6)", // semi-white bars
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#fff", // white legend text
        },
      },
      title: {
        display: true,
        text: "Skill Progress Overview",
        color: "#fff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.2)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.2)" },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillChart;