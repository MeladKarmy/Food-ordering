import React from "react";

export default function Span(props) {
  return (
    <span className={`${props.color ? props.color : ""} `}>{props.text}</span>
  );
}
