import React from "react";
import ChartLine from "../charts/ChartLine";
import ChartRadialBar from "../charts/ChartRadialBar";
import ChartRadar from "../charts/ChartRadar";
import ChartArea from "../charts/ChartArea";

export default function Dashboard() {

 

  return (
    <div className="float-left">
      <h1 className="tableCaption ">Dashboard</h1>
      <ChartArea/> 
      <ChartRadar/>
    </div>
  );
}
