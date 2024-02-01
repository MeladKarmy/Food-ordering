import React, { Children } from "react";

export default function BtnBlog({ children, handelClick }) {
  return (
    <button
      onClick={handelClick}
      className="text-xl text-red-500 px-6 py-1 border shadow-xl rounded-full bg-amber-300 w-full mb-4  "
    >
      {children}
    </button>
  );
}
