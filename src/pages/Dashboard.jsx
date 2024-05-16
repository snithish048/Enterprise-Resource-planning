import React, { useContext } from "react";

import ChartRadar from "../charts/ChartRadar";
import ChartArea from "../charts/ChartArea";
import { MyContext } from "../context/appContext";
import dollar from "../assets/icons/dollar.svg";
import revenue from "../assets/icons/revenue.svg";
import ERP from "../assets/images/ERP.svg";

export default function Dashboard() {
  const { productData, orderData } = useContext(MyContext);
  return (
    <>
      <div className="cover  ">
        <div className="flex flex-row mobile:flex-col w-[80vw] md:justify-around items-center">
          <p className="font-bold text-[6rem] text-secondary mobile:text-[3rem] ">
            Made your business simple!
          </p>
          <img className="h-[50vh]" src={ERP} alt="image" />
        </div>

        <div className="flex flex-col justify-around  md:flex-row md:justify-around">
          <div className=" flex flex-col md:justify-around md:items-center md:flex-row  ">
            <div className="dashboard h-[15rem] w-[24rem] ">
              <img className="h-[5rem]" src={dollar} alt="Icon" />
              <p className="py-[1rem] text-[2rem]">7,684,324K</p>
              <p className="text-primary">Total Earnings</p>
            </div>
            <div className="dashboard h-[15rem] w-[24rem]">
              <img className="h-[5rem]" src={revenue} alt="Icon" />
              <p className="py-[1rem] text-[2rem]">7,684,324K</p>
              <p className="text-primary">Total Revenue</p>
            </div>
          </div>
          <div className=" flex flex-col md:justify-around md:items-center md:flex-col  ">
            <div className="dashboard w-[24rem] md:w-[15rem]">
              <p className="text-primary">Total number Of Products </p>
              <p className="text-[2rem] font-bold">{productData.length}</p>
            </div>
            <div className="dashboard w-[24rem] md:w-[15rem]">
              <p className="text-primary">Total number Of Orders </p>
              <p className="text-[2rem] font-bold">{orderData.length}</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-around items-center md:flex-row md:mx-[1.5rem] ">
          <ChartRadar />
          <ChartArea />
        </div>
      </div>
    </>
  );
}
