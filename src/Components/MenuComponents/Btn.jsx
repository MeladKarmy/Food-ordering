import React from "react";
import { useNavigate } from "react-router-dom";

export default function Btn({ children }) {
  const navigateTo = useNavigate();
  return (
    <button
      onClick={() => {
        navigateTo("/cart");
      }}
      className="border border-amber-300 rounded-full px-3 py-1 hover:bg-red-500 hover:border-none"
    >
      {children}
    </button>
  );
}
