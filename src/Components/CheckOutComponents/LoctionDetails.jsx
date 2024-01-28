import React from "react";
import { useTranslation } from "react-i18next";

export default function LoctionDetails({ sendData }) {
  const { t, i18n } = useTranslation();
  const submit = (event) => {
    event.preventDefault();
    sendData({ hello: { k: "khkh" } });
  };
  return (
    <div>
      <form
        className=" flex flex-col md:flex-row justify-between items-start  md:flex-wrap "
        onSubmit={submit}
      >
        <label htmlFor="name" className="text-lg w-full md:w-3/6">
          {i18n.language == "ar" ? "الأسم" : "Name"} :
          <input
            type="text"
            id="name"
            className=" text-gray-700 px-4 py-1 rounded-3xl m-2 outline-red-500 border"
            placeholder={i18n.language == "ar" ? "الأسم" : "Name"}
          />
        </label>
        <label htmlFor="name" className="text-lg w-full md:w-3/6">
          {i18n.language == "ar" ? "إيميل" : "Email"} :
          <input
            type="email"
            id="Email"
            className=" text-gray-700 px-4 py-1 rounded-3xl m-2 outline-red-500 border"
            placeholder={i18n.language == "ar" ? "إيميل" : "Email"}
          />
        </label>
        <label htmlFor="name" className="text-lg w-full md:w-3/6">
          {i18n.language == "ar" ? "موبايل" : "Phone"} :
          <input
            type="number"
            id="phone"
            className=" text-gray-700 px-4 py-1 rounded-3xl m-2 outline-red-500 border"
            placeholder={i18n.language == "ar" ? "رقم التواصل" : "Phone No"}
          />
        </label>
        <label htmlFor="name" className="text-lg w-full md:w-3/6">
          {i18n.language == "ar" ? "العنوان" : "Address"} :
          <input
            type="text"
            id="location"
            className=" text-gray-700 px-4 py-1 rounded-3xl m-2 outline-red-500 border "
            placeholder={i18n.language == "ar" ? "العنوان" : "Address"}
          />
        </label>
      </form>
      {/* <button type="submit">send</button> */}
    </div>
  );
}
