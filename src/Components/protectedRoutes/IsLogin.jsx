import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function IsLogin({ childern }) {
  let token = useSelector((state) => state.Auth.token.token);
  if (token) {
    return childern;
  } else {
    return <Navigate to={"/login"} />;
  }
}
