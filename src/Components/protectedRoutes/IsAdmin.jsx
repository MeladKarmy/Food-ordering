import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function IsAdmin({ childern }) {
  let role = useSelector((state) => state.Auth.token.role);
  let token = useSelector((state) => state.Auth.token.token);

  if (token && role === "admin") {
    return childern;
  } else {
    return <Navigate to={"/"} />;
  }
}
