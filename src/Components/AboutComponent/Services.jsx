import React from "react";
import { useTranslation } from "react-i18next";
import HeaderServices from "./HeaderServices";
import ServicesDetails from "./ServicesDetails";
import OffersForEvents from "./OffersForEvents";

export default function Services() {
  const { t, i18n } = useTranslation();
  let textServices1 = [
    {
      word: `${t("about-page.services.header.text-one")}`,
      color: "text-red-500",
    },
    { word: `${t("about-page.services.header.text-two")}` },
    { word: `${t("about-page.services.header.text-three")}` },
  ];
  let textServices2 = [
    {
      word: `${t("about-page.services.header.text-four")}`,
      color: "text-red-500",
    },
    {
      word: `${t("about-page.services.header.text-five")}`,
      color: "text-amber-300",
    },
  ];
  let textServices3 = [
    {
      word: `${t("about-page.special-services.header.text-one")}`,
      color: "text-red-500",
    },
    {
      word: `${t("about-page.special-services.header.text-two")}`,
      color: "text-red-500",
    },
    {
      word: `${t("about-page.special-services.header.text-three")}`,
    },
  ];
  let textServices4 = [
    {
      word: `${t("about-page.special-services.header.text-four")}`,
    },
    {
      word: `${t("about-page.special-services.header.text-five")}`,
      color: "text-amber-300",
    },
  ];
  return (
    <div className="container mx-auto mt-16 px-4">
      <HeaderServices
        text1={textServices1}
        text2={textServices2}
        para={t("about-page.services.para")}
      />
      <ServicesDetails />
      <div className="mt-12">
        <HeaderServices text1={textServices3} text2={textServices4} />
      </div>
      <OffersForEvents />
    </div>
  );
}
