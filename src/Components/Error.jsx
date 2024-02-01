import React from "react";
import { useTranslation } from "react-i18next";

export default function Error(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-6xl text-red-500 font-bold">
        {i18n.language == "ar" ? "حدث خطاء ما !" : "Some thing happen Wrong !"}{" "}
      </h2>
      <p className="text-2xl text-red-500 font-bold mt-8">{props?.error}</p>
    </div>
  );
}
