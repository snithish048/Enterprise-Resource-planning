import React, { useContext, useState } from "react";
import menu from "../assets/icons/menu.svg";
import styles from "../styles.module.css"
import logo from "../assets/icons/erpLogo.svg"

export default function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-black600 mx-5 my-4 p-3 relative rounded-lg  text-2xl">
        
        <img
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 inline"
          src={menu}
          alt="Menu"
        />
        {/* <p className=" p-4 text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-indigo-400 inline-block text-transparent bg-clip-text">
          ERP <span className="font-normal">system</span>
        </p> */}
        <p className=" p-10 text-4xl font-bold text-headline inline">
          <span><img className="w-14 h-14 mx-2 inline" src={logo} alt="Logo" /></span>Enterprise Resource Planning <span className="text-3xl text-primary font-normal">system</span>
        </p>
        
      </div>
      {isOpen && children}
    </>
  );
}
