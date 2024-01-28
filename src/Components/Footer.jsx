import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  return (
    <>
      <footer className="mt-4 bg-red-400 text-gray-700 p-8 rounded-t-3xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-left">
            <h2 className="text-4xl font-extrabold  tracking-tight">
              {i18n.language == "ar"
                ? "أطلب البيتزا الأن "
                : "Order Your Pizza Now!"}
            </h2>
            <p className="m-2 text-gray-700">
              {i18n.language == "ar"
                ? "أستمتع بالبيتزا اللذيذه التي نقدمها "
                : "Satisfy your cravings with our delicious pizzas"}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigateTo("/menu")}
              className="bg-yellow-500 font-semibold text-gray-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
            >
              {t("base-button.order-now")}
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
