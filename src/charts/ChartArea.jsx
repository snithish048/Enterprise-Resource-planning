import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

export default function ChartArea() {
    const data = [
        {
          "name": "January",
          "uv": 4000,
          "pv": 5000,
          "amt": 2400
        },
        {
          "name": "February",
          "uv": 1398,
          "pv": 3000,
          "amt": 2210
        },
        {
          "name": "March",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "April",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "May",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        }
       
      ]
  return (
    <AreaChart
      width={350}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#bb86fc" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#03dac5" stopOpacity={0.8} />
          
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#E91E63" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FFEB3B" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}
