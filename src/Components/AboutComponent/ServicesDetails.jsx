import React from "react";
import Chef from "../../assets/Food App/Chef.png";
import cleankeatchen from "../../assets/Food App/clean-keatchen.png";
import onlineOrder from "../../assets/Food App/online-order.jpg";
import reservation from "../../assets/Food App/reservation.jpeg";
import { useTranslation } from "react-i18next";

export default function ServicesDetails() {
  const { t, i18n } = useTranslation();
  let services = [
    {
      titleEn: "Clean Kitchen",
      titleAr: "مطبخ نظيف",
      img: cleankeatchen,
    },
    {
      titleEn: "Online Order",
      titleAr: "طلبات أون لاين",
      img: onlineOrder,
    },
    {
      titleEn: "Pre-Reservation",
      titleAr: "الحجز المسبق",
      img: reservation,
    },
    {
      titleEn: "Super Chef",
      titleAr: "أمهر الطباخين",
      img: Chef,
    },
  ];
  return (
    <div className="flex justify-between md:flex-wrap items-center gap-8 flex-col md:flex-row md:justify-around md:items-center ">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex justify-center items-center gap-8 md:w-2/6 lg:w-1/5"
        >
          <img
            src={service.img}
            alt={service.titleEn}
            className="w-20 h-20 rounded-full"
          />
          <p className="text-xl font-semibold text-red-500 whitespace-nowrap">
            {i18n.language == "ar" ? service.titleAr : service.titleEn}
          </p>
        </div>
      ))}
    </div>
  );
}
