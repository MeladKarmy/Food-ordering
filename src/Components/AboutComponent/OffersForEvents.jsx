import React from "react";
import Caterings from "../../assets/Food App/Caterings.jpg";
import Birthdays from "../../assets/Food App/Birthdays.webp";
import Weddings from "../../assets/Food App/weddings.jpg";
import Events from "../../assets/Food App/events.jpg";
import { useTranslation } from "react-i18next";

export default function OffersForEvents() {
  const { t, i18n } = useTranslation();

  let offers = [
    {
      titleEn: "Caterings",
      titleAr: "طلبات الفنادق",
      img: Caterings,
    },
    {
      titleEn: "Birthdays",
      titleAr: "أعياد الميلاد",
      img: Birthdays,
    },
    {
      titleEn: "Weddings",
      titleAr: "حفلات الزفاف",
      img: Weddings,
    },
    {
      titleEn: "Events",
      titleAr: "الاحتفالات",
      img: Events,
    },
  ];
  return (
    <div className="flex mb-12 flex-wrap justify-around items-center gap-4">
      {offers.map((offer, index) => (
        <figure
          key={index}
          className="m-2 flex flex-col justify-center items-center w-full md:w-2/5 lg:flex-1 border-2 rounded-3xl shadow-2xl shadow-gray-800"
        >
          <img
            src={offer.img}
            alt={offer.titleEn}
            className=" object-cover rounded-3xl h-52 w-full"
          />
          <figcaption className="my-2 p-2">
            <h3 className="font-semibold text-2xl text-red-500 mb-5">
              {i18n.language == "ar" ? offer.titleAr : offer.titleEn}
            </h3>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
