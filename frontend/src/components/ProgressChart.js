// src/components/ProgressChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProgressChart({ skills }) {
  const data = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Progress (%)",
        data: skills.map((skill) => skill.progress),
        backgroundColor: "rgba(33, 150, 243, 0.5)",
      },
    ],
  };

  return <Bar data={data} />;
}