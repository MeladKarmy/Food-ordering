import React from "react";

export default function Banner({ image, name }) {
  return (
    <div className="container mx-auto">
      <img src={image} alt={name} className="rounded-3xl  object-cover" />
    </div>
  );
}
