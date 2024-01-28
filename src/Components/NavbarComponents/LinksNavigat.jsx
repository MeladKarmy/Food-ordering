import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function LinksNavigat() {
  const { t, i18n } = useTranslation();
  let links = [
    {
      to: "/",
      activeLink: "",
      title: "home",
    },
    {
      to: "/about",
      activeLink: "about",
      title: "about",
    },
    {
      to: "/contact",
      activeLink: "contact",
      title: "contact",
    },
    {
      to: "/menu",
      activeLink: "menu",
      title: "menu",
    },
  ];

  return (
    <div
      className={`flex flex-col md:flex-row md:justify-between md:items-center md:gap-2`}
    >
      {links.map((link, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            isActive
              ? "border border-none rounded-full px-4 py-1 mb-1 font-bold bg-red-400 text-gray-600"
              : "border border-none rounded-full px-4 py-1 mb-1  font-bold hover:bg-red-400 text-gray-600"
          }
          to={link.to}
        >
          {t("navbare." + link.title)}
        </NavLink>
      ))}
    </div>
  );
}
