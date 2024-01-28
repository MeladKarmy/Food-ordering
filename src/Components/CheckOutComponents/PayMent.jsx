import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayMent() {
  const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };

  return (
    <>
      <div className=" mx-auto p-8  md:w-10/12 lg:w-8/12">
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
        </PayPalScriptProvider>
      </div>
    </>
  );
}
