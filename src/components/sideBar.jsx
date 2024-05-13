import React from 'react'
import { Outlet, Link } from "react-router-dom"
import styles from "../styles.module.css"


export default function SideBar() {
  return (
    
    <>
    {/* <nav className='float-left flex gap-16 flex-col text-2xl w-1/10 px-8 py-16 h-screen bg-black900 text-white' > */}
    <nav className={styles.sideBar} >
     
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/orders">Orders</Link>
        </p>
        <p>
          <Link to="/products">Products</Link>
        </p>
        <p>
          <Link to="/calendar">Calendar</Link>
        </p>
      
    </nav>

    
  </>
  )
}
