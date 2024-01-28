import React, { useState } from "react";
import { increment, decrement, removeFromCart } from "../../Redux/cart/Cart";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Card({ product }) {
  const dispatch = useDispatch();
  let [price, setPrice] = useState();
  let [toppings, setToppings] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <div className="p-6 ">
      <div className="bg-white mx-auto rounded-3xl shadow-lg flex justify-between gap-x-4 items-center p-2 w-full md:w-2/3 lg:w-1/2">
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.nameEn}
            className="w-full object-cover rounded-3xl"
          />
        </div>
        <div className="text-start w-1/2 relative">
          <h5 className="mb-4 text-red-500 font-semibold">
            {i18n.language == "ar" ? product.nameAr : product.nameEn}
          </h5>
          {product.category == "6591747ee7c53542dd464c76" ? (
            <>
              <select
                id="prize"
                className="inline-block m-1 text-gray-700 appearance-none w-1/2 bg-white-500 border border-gray-300 py-1 px-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                name="prize"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option disabled selected className=" w-2">
                  Select Size
                </option>
                <option className="text-gray-700" value={product.size?.small}>
                  Small: {product.size?.small} $
                </option>
                <option className="text-gray-700" value={product.size?.medium}>
                  Medium: {product.size?.medium} $
                </option>
                <option className="text-gray-700" value={product.size?.large}>
                  Large: {product.size?.large} $
                </option>
              </select>
              <select
                id="prize"
                className="inline-block m-1 text-gray-700 appearance-none w-1/2 bg-white-500 border border-gray-300 py-1 px-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                name="prize"
                value={toppings}
                onChange={(e) => setToppings(e.target.value)}
              >
                <option selected value={0} className="">
                  No Toppings
                </option>
                <option
                  className="text-gray-700"
                  value={product.toppingsPrize?.medium}
                >
                  medium: {product.toppingsPrize?.medium} $
                </option>
                <option
                  className="text-gray-700"
                  value={product.toppingsPrize?.large}
                >
                  Large: {product.toppingsPrize?.large} $
                </option>
              </select>
              <div>
                {i18n.language == "ar"
                  ? product.toppingsAr.map((ele) => (
                      <span className="inline-block m-1 text-sm text-gray-700 bg-red-500 rounded-3xl px-2 py-1">
                        {ele}
                      </span>
                    ))
                  : product.toppingsEn.map((ele) => (
                      <span className="inline-block text-sm m-1 text-gray-700 bg-red-500 rounded-3xl px-2 py-1">
                        {ele}
                      </span>
                    ))}
              </div>
            </>
          ) : (
            <p className="text-xl font-semibold text-red-500">
              {product.price ? product.price + " $" : "20 $"}{" "}
            </p>
          )}
          <p className="text-xl font-semibold text-amber-500">
            {price && price * product.amount + +toppings + " $"}
          </p>
          <div className="text-center mt-5 flex justify-center items-center gap-x-3">
            <button
              className="text-2xl text-red-500 font-semibold"
              disabled={product.amount <= 1}
              onClick={() => dispatch(decrement(product))}
            >
              -
            </button>
            <button className="text-2xl text-red-500 font-semibold">
              {product.amount}
            </button>
            <button
              className="text-2xl text-red-500 font-semibold"
              onClick={() => dispatch(increment(product))}
            >
              +
            </button>
            <button
              className={`text-red-500 absolute top-0  ${
                i18n.language == "ar" ? "left-0" : "right-0"
              } `}
              onClick={() => dispatch(removeFromCart(product))}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
