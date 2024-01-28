import React from "react";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import { NavLink, Outlet } from "react-router-dom";

export default function LoginHome() {
  return (
    <div className="mt-36">
      <Outlet />
    </div>
  );
}
