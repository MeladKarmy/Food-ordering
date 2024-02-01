import React from "react";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex  justify-center">
      <RingLoader color="rgb(248, 113, 113)" size={100} speedMultiplier={1} />
    </div>
  );
}
