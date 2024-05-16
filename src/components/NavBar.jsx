import React, { useContext, useState } from "react";
import menu from "../assets/icons/menu.svg";
import notification from "../assets/icons/notification.svg";
import about from "../assets/icons/about.svg";

export default function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mobile:mx-0 py-[1rem] border-b border-black300 bg-black800  relative rounded-lg ">
        <div className="flex items-center mobile:mt-[0.4rem] mt-[0.8rem] mx-[0.5rem] float-left">
          <img
            onClick={() => setIsOpen(!isOpen)}
            className=" w-[2rem]  md:w-10  "
            src={menu}
            alt="Menu"
          />
        </div>

        <div className="text-center ">
          <p className="headerFont  text-purple-300 inline  text-[2rem] font-bold md:font-extrabold md:text-[2.8rem] ">
            <span className="hidden mobile:hidden  text-[3rem] text-secondary font-normal ">
              {"{ "}
            </span>
            Enterprise Resource Planning
            <span className="hidden mobile:hidden text-[3rem] text-secondary font-normal ">
              {" }"}
            </span>
          </p>

          <img
            className="mobile:hidden h-[2rem] float-right mt-[1rem] mx-[2rem] "
            src={about}
            alt="Icon"
          />
          <img
            className="mobile:hidden h-[2rem] float-right mt-[1rem] mx-[2rem] "
            src={notification}
            alt="Icon"
          />
        </div>
      </div>
      {isOpen && children}
    </>
  );
}
