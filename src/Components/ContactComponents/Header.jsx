import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="mx-auto mb-12">
      <h2 className="text-6xl font-semibold text-red-500 mb-6">
        {t("contact-page.header.title")}
      </h2>
      <p className="text-center text-gray-500 text-xl ">
        {t("contact-page.header.des-one")} <br />
        {t("contact-page.header.des-two")}{" "}
      </p>
    </div>
  );
}
