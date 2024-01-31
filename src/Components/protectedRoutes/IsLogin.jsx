import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function IsLogin({ children }) {
  let token = useSelector((state) => state.Auth.token.token);
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
