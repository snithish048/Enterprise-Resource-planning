import React from "react";
import { RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
export default function ChartRadar() {
  const data = [
    {
      subject: "India",
      A: 120,
      B: 110, 
      fullMark: 150,
    },
    {
      subject: "China",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "UK",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "USA",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Japan",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Canada",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <RadarChart outerRadius={90} width={400} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="2023 sales"
        dataKey="A"
        stroke="#03dac5"
        fill="#03dac5"
        
        fillOpacity={0.6}
      />
      <Radar
        name="2024 sales"
        dataKey="B"
        stroke="#bb86fc"
        fill="#bb86fc"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
}
