import React from "react";
import { useTranslation } from "react-i18next";

export default function Address() {
  let { t, i18n } = useTranslation();
  let addressSection = [
    {
      id: 1,
      title: `${t("contact-page.address.call.title")}`,
      detail: `${t("contact-page.address.call.detail")}`,
    },
    {
      id: 2,
      title: `${t("contact-page.address.hours.title")}`,
      detail: `${t("contact-page.address.hours.detail")}`,
    },
    {
      id: 3,
      title: `${t("contact-page.address.location.title")}`,
      detail: `${t("contact-page.address.location.detail")}`,
    },
  ];
  return (
    <div className="text-start md:flex mx-auto md:justify-center md:items-start md:gap-x-20 mb-12">
      {addressSection.map((address) => (
        <div key={address.id} className=" rounded-2xl px-3 py-2">
          <h4 className="text-3xl text-red-500 whitespace-nowrap mb-3">
            {address.title}
          </h4>
          <p>{address.detail}</p>
        </div>
      ))}
    </div>
  );
}
