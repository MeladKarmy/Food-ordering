import React from "react";

export default function NotFound(props) {
  return (
    <div className="container mx-auto text-center mt-44 h-screen">
      <h2 className="text-9xl text-red-500 font-bold">Error 404 </h2>
      <p className="text-2xl text-red-500 font-bold mt-8">{props?.error}</p>
    </div>
  );
}
