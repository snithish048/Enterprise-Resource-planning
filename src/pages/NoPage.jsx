import React from "react";
import errorbg from "../assets/images/404-Error.svg";

export default function NoPage() {
  return (
    <div className="flex items-center justify-center flex-col fixed inset-0 bg-black800 z-50">
      <img className="h-[70vh]" src={errorbg} alt="" />
      <p className="font-extrabold text-primary text-[6rem]">Page not found</p>
    </div>
  );
}
