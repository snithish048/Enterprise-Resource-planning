import React, { useState, useContext, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment-timezone";
import { MyContext } from "../context/appContext";
import coffee from "../assets/images/coffee.svg";

export default function OrderCalendar() {
  const { orderData } = useContext(MyContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [orderId, setOrderId] = useState();
  const [customerName, setCustomerName] = useState();
  const [orderDate, setOrderDate] = useState();
  const [orderStatus, setOrderStatus] = useState();
  const [address, setAddress] = useState();

  const date = moment(selectedDate).format("YYYY-MM-DD");
  const dateInWords = moment(selectedDate)
    .tz("Asia/Kolkata")
    .format("DD MMMM, YYYY");

  const handleChange = (data) => {
    setSelectedDate(data);
  };

  const setData = () => {
    let newData;
    orderData.map((val, i) => {
      if (val.orderDate === date) {
        newData = val;
        return newData;
      }

      if (newData) {
        setOrderId(newData.orderId);
        setCustomerName(newData.customerName);
        setOrderStatus(newData.status);
        setAddress(newData.address);
      } else {
        setOrderId();
        setCustomerName();
        setOrderStatus();
        setAddress();
      }
    });
  };

  useEffect(
    function () {
      setData();
    },
    [selectedDate]
  );

  const titlecontent = ({ date, view }) => {
    if (view === "month") {
      const dateObject = new Date(date);

      const year = dateObject.getFullYear();

      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      const day = dateObject.getDate().toString().padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;

      orderData.map((val, i) => {});
      const scheduledOrders = orderData.filter(
        (order) => order.orderDate === formattedDate
      );
      return (
        <div className="bg-black750 text-secondary">
          {scheduledOrders.length > 0 && <p>{scheduledOrders.length} order</p>}
        </div>
      );
    }
  };

  return (
    <div className="cover flex justify-center items-center flex-col bg-black900 mx-[1.5rem] ">
      <h1 className="tableCaption ">Order Calendar</h1>
      <div className="mb-[1rem]">
        <Calendar
          onChange={handleChange}
          value={selectedDate}
          timezone="IST"
          tileContent={titlecontent}
        />
      </div>
      <div className="text-white  h-fit   rounded-[10px] p-[1rem]">
        {orderId ? (
          <div className="flex flex-col ">
            <p className="font-bold text-[2rem] text-center">
              Orders on {dateInWords}
            </p>
            <p className="font-bold text-[1rem]">
              {" "}
              <span className="text-[1.2rem] text-primary300">Name:</span>{" "}
              {customerName}
            </p>
            <p className="font-bold text-[1rem]">
              <span className="text-[1.2rem] text-primary300">Address:</span>{" "}
              {address}
            </p>
            <p className="font-bold text-[1rem]">
              <span className="text-[1.2rem] text-primary300">Status:</span>{" "}
              {orderStatus}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            {" "}
            <img className="h-[5rem] " src={coffee} alt="Icon" />
            <p className="font-bold text-[2rem] text-center">
              {" "}
              Relax!! no orders for {dateInWords}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
