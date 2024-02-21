import React from "react";
import CardAdmin from "./CardAdmin";
import { useTranslation } from "react-i18next";

export default function HomeAdmin() {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      text: `${i18n.language == "ar" ? "بـيـتـزا" : "PizzA"}`,
      link: "pizza",
    },
    {
      text: `${i18n.language == "ar" ? "تـصنـيف" : "Category"}`,
      link: "category",
    },
    {
      text: `${i18n.language == "ar" ? "المشــروبــات" : "Drinks"}`,
      link: "drinks",
    },
    {
      text: `${i18n.language == "ar" ? "المستخدمين" : "Users"}`,
      link: "users",
    },
    {
      text: `${i18n.language == "ar" ? "الطلبات" : "Orders"}`,
      link: "orders",
    },
  ];
  return (
    <div className="flex justify-around items-center">
      {cards.map((card, index) => (
        <CardAdmin key={index} text={card.text} link={card.link} />
      ))}
    </div>
  );
}
