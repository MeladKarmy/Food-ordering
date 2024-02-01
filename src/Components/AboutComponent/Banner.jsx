import React from "react";
import aboutCover from "../../assets/Food App/about.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Banner() {
  const navigateTo = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div
      className="bg-cover bg-center w-full h-screen mt-0 flex justify-center items-center"
      style={{ backgroundImage: `url(${aboutCover})` }}
    >
      <div>
        <h2 className="text-6xl text-red-500 font-semibold leading-tight mb-12">
          {t("about-page.banner-header.text-one")} <br />
          {t("about-page.banner-header.text-two")}
        </h2>
        <p className="text-gray-600">
          {t("about-page.banner-para.text-one")} <br />
          {t("about-page.banner-para.text-two")}
        </p>
        <div className="mt-24 flex justify-center gap-x-5">
          <button
            onClick={() => {
              navigateTo("/menu");
            }}
            className="px-4 py-2 text-xl font-semibold rounded-full  text-red-600 border-2 border-gray-300 hover:border-transparent hover:shadow-2xl hover:shadow-red-500"
          >
            {t("base-button.explore-menu")}
          </button>
        </div>
      </div>
    </div>
  );
}
