import React from "react";
import HomeAdmin from "../Components/AdminComponents/HomeAdmin";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="mt-36">
      <HomeAdmin />
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
}
