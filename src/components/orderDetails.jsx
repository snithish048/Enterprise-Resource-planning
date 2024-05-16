import React from "react";
import close from "../assets/icons/close.svg";

export default function OrderDetails({ value, setForm }) {
  console.log(value);
  return (
    <div className="overlay flex text-white ">
      <div className="modal bg-black h-fit p-[1rem]">
        <img
          src={close}
          alt="Close"
          className="inline absolute top-4 right-8 h-[2rem]"
          onClick={() => setForm(false)}
        />
        <p className="text-white text-center text-[1.2rem] font-bold">
          {value.orderId}
        </p>
        <p className="text-[1.2rem] m-[1rem] text-primary font-bold">
          Name:{" "}
          <span className="text-headline font-normal">
            {value.customerName}
          </span>
        </p>
        <p className="text-[1.2rem] m-[1rem] text-primary font-bold">
          Delivery date:{" "}
          <span className="text-headline font-normal">{value.orderDate}</span>
        </p>
        <p className="text-[1.2rem] m-[1rem] text-primary font-bold">
          Address:{" "}
          <span className="text-headline font-normal">{value.address}</span>
        </p>
      </div>
    </div>
  );
}
