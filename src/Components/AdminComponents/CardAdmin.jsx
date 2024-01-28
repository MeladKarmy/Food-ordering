import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function CardAdmin(props) {
  const { t, i18n } = useTranslation();
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) =>
        isActive
          ? "border border-none rounded-3xl px-6 py-3 mb-1 font-bold bg-red-500 text-gray-400"
          : "border border-none rounded-3xl px-6 py-3 mb-1  font-bold hover:bg-red-400 text-gray-500"
      }
    >
      <i class="fa-solid fa-pen-to-square"></i>
      <span> {props.text}</span>
      <p className="mt-4">
        {i18n.language == "ar" ? "أضافه, تعديل , حذف " : "Add, Edit, Remove"}
        <br />
        {i18n.language == "ar"
          ? "لأداره سهله بدون تعب"
          : "effortlessly for seamless management"}
      </p>
    </NavLink>
  );
}
