import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function NotLogin({ children }) {
  const login = useSelector((state) => state.Auth.token.token);
  if (!login) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}
