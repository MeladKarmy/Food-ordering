import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function IsAdmin({ children }) {
  let role = useSelector((state) => state.Auth.token.role);
  let token = useSelector((state) => state.Auth.token.token);

  if (token && role === "admin") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
