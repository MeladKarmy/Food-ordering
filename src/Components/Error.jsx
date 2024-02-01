import React from "react";
import { useTranslation } from "react-i18next";
import errorImg from "../assets/Food App/error.png";

export default function Error(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <img className="w-44 object-cover" src={errorImg} alt="Error" />
      {/* <h2 className="text-6xl text-red-500 font-bold">
        {i18n.language == "ar" ? "حدث خطاء ما !" : "Something happen Wrong !"}
      </h2> */}
      <p className="text-2xl text-red-500 font-bold mt-8">{props?.error}</p>
    </div>
  );
}
