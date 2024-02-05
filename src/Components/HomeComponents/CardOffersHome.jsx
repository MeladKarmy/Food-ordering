import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cart/Cart";
import { Link } from "react-router-dom";

export default function CardOffersHome({ offer }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div className="relative pt-36 md:pt-32 lg:pt-24 mb-28 rounded-3xl md:mb-0  bg-gradient-to-b from-white to-red-400 shadow-2xl md:w-80 lg:w-64 ">
      <div className="w-52 h-52 lg:w-40 lg:h-40 bg-amber-300 mx-auto rounded-full absolute -top-20 -bottom-4 left-1/2 -translate-x-1/2">
        <Link to={`/blog/${offer._id}`}>
          <div className="w-48 h-48 lg:w-36 lg:h-36 border-8 border-white mx-auto rounded-full absolute left-1/2 -translate-x-1/2 top-2 ">
            <img
              className="rounded-full w-44 h-44 lg:w-32 lg:h-32 object-cover"
              src={offer.image}
              alt="pizza"
            />
          </div>
        </Link>
      </div>
      <div className="text-center">
        <p className="text-3xl text-red-500 font-bold">
          <p className="text-decoration-line: line-through">
            {offer.size.medium}$
          </p>
          <p className="text-amber-500">
            {parseFloat(
              eval(
                offer.size.medium -
                  (offer.offerNumber * offer.size.medium) / 100
              ).toFixed(3)
            )}
            $
          </p>
        </p>
        <h5 className="text-3xl font-bold text-gray-600">
          {i18n.language == "en" ? offer.nameEn : offer.nameAr}
        </h5>
        <p className="py-12 md:p-3 text-lg mb-8 text-gray-600">
          {i18n.language == "en" ? offer.descriptionEn : offer.descriptionAr}
        </p>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                ...offer,
                amount: 1,
                selectSize: offer?.size?.medium || 0,
                selectToppings: 0,
              })
            )
          }
          className="bg-red-600 rounded-full px-5 py-2 lg:px-3  text-lg font-semibold absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-95 shadow-2xl  hover:opacity-100"
        >
          {t("base-button.order-now")}
        </button>
      </div>
    </div>
  );
}
