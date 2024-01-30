import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function CardMenu(props) {
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  return (
    <figure
      className="flex flex-col mb-4 justify-start items-center w-full md:w-2/5
     lg:w-3/12 xl:w-1/5 border-2 rounded-3xl shadow-2xl shadow-gray-800 cursor-pointer"
      onClick={() => {
        navigateTo(`/blog/${props.card._id}`);
      }}
    >
      <img
        src={props.card.image}
        alt={props.card.nameEn}
        className="object-fill rounded-3xl w-full"
      />
      <figcaption className="my-2 p-2">
        <h3 className="font-semibold text-2xl text-red-500 mb-5">
          {i18n.language == "ar" ? props.card.nameAr : props.card.nameEn}
        </h3>
        <p className="text-gray-500 text-lg">
          {i18n.language == "ar"
            ? props.card.descriptionAr.slice(0, 50) + " المزيد ..."
            : props.card.descriptionEn.slice(0, 50) + " More ..."}
        </p>
      </figcaption>
      <div className=" justify-self-stretch mb-2"></div>
    </figure>
  );
}
