import React from "react";
import notify from "../assets/images/Notify.svg";

export default function Notification() {
  return (
    <div className="cover">
      <img className="h-[50%]" src={notify} alt="" />
      <p className="font-bold text-[4rem] text-primary mobile:text-[3rem]">
        No notifications!
      </p>
    </div>
  );
}
