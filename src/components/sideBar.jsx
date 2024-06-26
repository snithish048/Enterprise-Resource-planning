import React from "react";
import { Outlet, Link } from "react-router-dom";
import home from "../assets/icons/home.svg";
import order from "../assets/icons/order.svg";
import product from "../assets/icons/product.svg";
import calendar from "../assets/icons/calendar.svg";
import notification from "../assets/icons/notification.svg";

export default function SideBar() {
  return (
    <>
      <nav className="sideBar mobile:hidden">
        <p>
          <Link to="/">
            {" "}
            <img className="icon" src={home} alt="Icon" /> Home
          </Link>
        </p>
        <p>
          <Link to="/orders">
            {" "}
            <img className="icon" src={order} alt="Icon" /> Orders
          </Link>
        </p>
        <p>
          <Link to="/products">
            {" "}
            <img className="icon" src={product} alt="Icon" /> Products
          </Link>
        </p>
        <p>
          <Link to="/calendar">
            {" "}
            <img className="icon" src={calendar} alt="Icon" /> Calendar
          </Link>
        </p>
        <p>
          <Link to="/notifications">
            {" "}
            <img className="icon" src={notification} alt="Icon" /> Notifications
          </Link>
        </p>
      </nav>
    </>
  );
}
