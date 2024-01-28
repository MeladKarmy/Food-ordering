import React from "react";
import CardAdmin from "./CardAdmin";
import { useTranslation } from "react-i18next";

export default function HomeAdmin() {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      text: `${i18n.language == "ar" ? "بـيـتـزا" : "PizzA"}`,
      link: "pizza",
      para: `${
        i18n.language == "ar"
          ? "أضافه, تعديل , حذف "
          : "Add, Edit, Remove  effortlessly for seamless management"
      }`,
    },
    {
      text: `${i18n.language == "ar" ? "تـصنـيف" : "Category"}`,
      link: "category",
    },
    {
      text: `${i18n.language == "ar" ? "المشــروبــات" : "Drinks"}`,
      link: "drinks",
    },
  ];
  return (
    <div className="flex justify-around items-center">
      {cards.map((card) => (
        <CardAdmin text={card.text} link={card.link} />
      ))}
    </div>
  );
}
