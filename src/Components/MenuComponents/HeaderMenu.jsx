import React from "react";
import Span from "../HomeComponents/Span";
import { useTranslation } from "react-i18next";

export default function HeaderMenu() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="text-6xl font-semibold text-center mb-4  md:font-bold leading-normal">
        <Span color="text-amber-300" text="Our " />
        <Span color="text-red-500" text="Menu" />
      </h2>
      <p className="w-1/2 mx-auto">{t("menu-page.des")}</p>
    </div>
  );
}
