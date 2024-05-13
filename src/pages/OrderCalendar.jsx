import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment-timezone";
import { MyContext } from "../context/appContext";
import { DateTime } from "luxon";
import { order } from "../data/order";

export default function OrderCalendar() {
  const { orderData } = useContext(MyContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orderId, setOrderId] = useState();
  const [customerName, setCustomerName] = useState();
  const [orderDate, setOrderDate] = useState();
  const [orderStatus, setOrderStatus] = useState();

  const date = moment(selectedDate).format("YYYY-MM-DD");
  const dateInWords = moment(selectedDate)
    .tz("Asia/Kolkata")
    .format("DD MMMM, YYYY");

  const handleChange = (data) => {
    setSelectedDate(data);
  };


  const setData = ()=>{
    let newData;
    orderData.map((val, i) => {
     
      if (val.orderDate === date) {
        newData = val;
        return newData
      }
      
      if(newData){
        setOrderId(newData.orderId)
        setCustomerName(newData.customerName)
        setOrderStatus(newData.status)
      }
    });
  }

  useEffect(function() {
    setData()
  }, [selectedDate]);


  const titlecontent = (data)=>{
    const date =  moment(data).format("YYYY-MM-DD")
    console.log(date.toLocaleDateString())
    const scheduledOrders = orderData.filter((val, i) => date === val.orderDate)
    console.log(scheduledOrders)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Calendar with Hardcoded Data</h1>
      <div style={{ marginBottom: "20px" }}>
        <Calendar onChange={handleChange} value={selectedDate} timezone="IST" 
         tileContent = {titlecontent}
        />
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
        }}
      >
        <h2>{dateInWords}</h2>
        <p>{orderId}</p>
        <p>{customerName}</p>
        <p>{orderStatus}</p>
      </div>
    </div>
  );
}
