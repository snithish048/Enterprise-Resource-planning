import React from 'react'
import { useState } from "react";
import NavBar from '../components/NavBar';
import { AppContext } from "../context/appContext";
import SideBar from '../components/sideBar';
import Dashboard from './Dashboard';
import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
    <AppContext>
      <NavBar>
        <SideBar></SideBar>
      </NavBar>
      <Outlet />
    </AppContext>
  </>
  )
}
