import React from "react";
import { PieChart, BarChart } from "@mui/x-charts";
import {  pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function Chart() {
  const data = [
    { value: 5, label: 'A' },
    { value: 10, label: 'B' },
    { value: 15, label: 'C' },
    { value: 20, label: 'D' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  
  return (
    <div className="text-white">
      <PieChart
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A", color: "#4e79a7" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />

      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </div>
  );
}
