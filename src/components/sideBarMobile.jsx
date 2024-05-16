import React from "react";
import { Outlet, Link } from "react-router-dom";
import home from "../assets/icons/home.svg";
import order from "../assets/icons/order.svg";
import product from "../assets/icons/product.svg";
import calendar from "../assets/icons/calendar.svg";
import notification from "../assets/icons/notification.svg";
import about from "../assets/icons/about.svg";

export default function SideBarMobile() {
  return (
    <>
      <nav className="sideBarMobile md:hidden">
        <p>
          <Link to="/">
            {" "}
            <img className="h-[2rem]" src={home} alt="Icon" />{" "}
          </Link>
        </p>
        <p>
          <Link to="/orders">
            {" "}
            <img className="h-[2rem]" src={order} alt="Icon" />{" "}
          </Link>
        </p>
        <p>
          <Link to="/products">
            {" "}
            <img className="h-[2rem]" src={product} alt="Icon" />{" "}
          </Link>
        </p>
        <p>
          <Link to="/calendar">
            {" "}
            <img className="h-[2rem]" src={calendar} alt="Icon" />{" "}
          </Link>
        </p>
        <p>
          <Link to="/notifications">
            {" "}
            <img className="icon" src={notification} alt="Icon" />
          </Link>
        </p>
      </nav>
    </>
  );
}
