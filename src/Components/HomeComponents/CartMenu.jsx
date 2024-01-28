import React from "react";
import { useNavigate } from "react-router-dom";

export default function CartMenu({ title, des, button, icon }) {
  const navigatTo = useNavigate();
  return (
    <div className="flex-col justify-center items-center border-4 rounded-2xl border-gray-200 p-5 w-full md:w-5/12  lg:flex-1 mb-3">
      <button className="bg-gray-200 rounded-full px-3 py-2 mb-4 ">
        <i className={`${icon} text-red-500 text-4xl `}></i>
      </button>
      <h2 className=" font-bold text-2xl text-red-500 mb-3">{title}</h2>
      <p className="text-lg">{des}</p>
      <button
        onClick={() => navigatTo("menu")}
        className="text-red-500 font-bold text-xl mt-5 px-4 py-1 shadow-2xl opacity-95 hover:opacity-100 hover:bg-slate-300 hover:rounded-full"
      >
        {button}
      </button>
    </div>
  );
}
