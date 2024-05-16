import React from "react";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/appContext";
import SideBar from "../components/sideBar";
import SideBarMobile from "../components/sideBarMobile";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppContext>
        <NavBar>
          <SideBar></SideBar>
          <SideBarMobile />
        </NavBar>
        <Outlet />
      </AppContext>
    </>
  );
}
