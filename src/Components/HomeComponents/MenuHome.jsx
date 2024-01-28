import React from "react";
import { useTranslation } from "react-i18next";
import CartMenu from "./CartMenu";

export default function MenuHome() {
  let { t, i18n } = useTranslation();
  let cards = [
    {
      title: `${t("hmoe-Page.menu.cards.card-one.title")}`,
      des: `${t("hmoe-Page.menu.cards.card-one.des")}`,
      button: `${t("base-button.explore-menu")}`,
      icon: "fa-solid fa-pizza-slice",
    },
    {
      title: `${t("hmoe-Page.menu.cards.card-two.title")}`,
      des: `${t("hmoe-Page.menu.cards.card-two.des")}`,
      button: `${t("base-button.explore-menu")}`,
      icon: "fa-solid fa-mug-saucer",
    },
    {
      title: `${t("hmoe-Page.menu.cards.card-three.title")}`,
      des: `${t("hmoe-Page.menu.cards.card-three.des")}`,
      button: `${t("base-button.explore-menu")}`,
      icon: "fa-solid fa-sack-dollar",
    },
  ];
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-5xl font-bold mb-5 leading-relaxed">
          <span>{t("hmoe-Page.menu.header.word-1")} </span>
          <span className="text-red-500">
            {t("hmoe-Page.menu.header.word-2")}
          </span>
          <span>{t("hmoe-Page.menu.header.word-3")}</span>
        </h3>
      </div>
      <div className=" mx-auto mt-16 md:flex md:flex-wrap md:justify-around md:items-center  md:gap-3">
        {cards.map((card) => (
          <CartMenu
            title={card.title}
            des={card.des}
            button={card.button}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
