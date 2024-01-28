import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Catagory() {
  const { t, i18n } = useTranslation();
  let links = [
    {
      to: "/menu/allMenu",
      activeLink: "menu/allMenu",
      title: "All",
    },
    {
      to: "/menu/pizza",
      activeLink: "/menu/pizza",
      title: "PizzA",
    },
    {
      to: "/menu/drinks",
      activeLink: "/menu/drinks",
      title: "Drinks",
    },
    {
      to: "/menu/desert",
      activeLink: "/menu/Offers",
      title: "Offers",
    },
  ];
  return (
    <div>
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
          {link.title}
          {/* {t("navbare." + link.title)} */}
        </NavLink>
      ))}
    </div>
  );
}
