import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function IsLogin({ children }) {
  let token = useSelector((state) => state.Auth.token.token);
  const location = useLocation();
  if (token) {
    return children;
  } else {
    return <Navigate to={"/login"} state={{ path: location.pathname }} />;
  }
}
