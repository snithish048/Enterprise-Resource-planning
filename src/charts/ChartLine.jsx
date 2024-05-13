import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export default function ChartLine() {
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
  
      <LineChart
        
        width={500}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis  dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
        <Line
          name="Revenue"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
        />
        <Line
          name="Profit"
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
        />
      </LineChart>
 
  )
}
