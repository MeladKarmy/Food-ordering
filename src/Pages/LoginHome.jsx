import React from "react";
import { Outlet } from "react-router-dom";

export default function LoginHome() {
  return (
    <div className="mt-36">
      <Outlet />
    </div>
  );
}
