import React from "react";
import { useTranslation } from "react-i18next";
import CardOffersHome from "./CardOffersHome";
import useFetch from "../hooks/FetchData";
import Spinner from "../Spinner";
import Error from "../Error";

export default function SpecialOffers() {
  let { data, isPending, error } = useFetch("pizza");
  let { t, i18n } = useTranslation();
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-5xl font-bold mb-5 leading-relaxed">
          <span>{t("hmoe-Page.offers.header.word-1")} </span>
          <span className="text-red-500">
            {t("hmoe-Page.offers.header.word-2")}{" "}
          </span>
          <span>{t("hmoe-Page.offers.header.word-3")}</span>
        </h3>
        <p className="text-xl">{t("hmoe-Page.offers.p")}</p>
      </div>

      <div className="card mt-40 md:flex md:flex-wrap md:gap-y-28 md:gap-x-4 md:justify-around md:items-stretch lg:gap-x-0.5 ">
        {isPending && <Spinner />}
        {error && <Error error={error} />}
        {data?.slice(0, 3).map((offer, index) => (
          <CardOffersHome key={index} offer={offer} />
        ))}
      </div>
    </div>
  );
}
