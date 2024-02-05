import React from "react";
import {
  increment,
  decrement,
  removeFromCart,
  selectSizeToppings,
  selectSizePizza,
} from "../../Redux/cart/Cart";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Card({ product }) {
  const dispatch = useDispatch();
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
          <h5 className="mb-4 text-red-500 font-semibold text-xl">
            {i18n.language == "ar" ? product.nameAr : product.nameEn}
          </h5>
          {product.category == "6591747ee7c53542dd464c76" ? (
            <>
              <select
                id="selectSize"
                className="inline-block m-1 text-gray-700 appearance-none w-1/2 bg-white-500 border border-gray-300 py-1 px-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                name="selectSize"
                value={product.selectSize}
                onChange={(e) =>
                  dispatch(
                    selectSizePizza({ ...product, newSize: e.target.value })
                  )
                }
              >
                <option disabled className=" w-2">
                  {i18n.language == "ar" ? "اختار الحجم" : "Select Size"}
                </option>
                {product?.size?.small && (
                  <option
                    className="text-gray-700"
                    value={product?.size?.small}
                  >
                    {i18n.language == "ar" ? "صغيره" : "Small"} :
                    {product.size?.small} $
                  </option>
                )}
                {product?.size?.medium && (
                  <option
                    className="text-gray-700"
                    value={product?.size?.medium}
                  >
                    {i18n.language == "ar" ? "وســط" : "medium"} :
                    {product.size?.medium} $
                  </option>
                )}
                {product?.size?.large && (
                  <option
                    className="text-gray-700"
                    value={product?.size?.large}
                  >
                    {i18n.language == "ar" ? "كبيـر" : "Large"} :
                    {product.size?.large} $
                  </option>
                )}
              </select>
              {product?.toppingsPrize && (
                <select
                  id="selectToppings"
                  className="inline-block m-1 text-gray-700 appearance-none w-1/2 bg-white-500 border border-gray-300 py-1 px-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  name="selectToppings"
                  value={product.selectToppings}
                  onChange={(e) =>
                    dispatch(
                      selectSizeToppings({
                        ...product,
                        newSize: e.target.value,
                      })
                    )
                  }
                >
                  <option value={0} className="">
                    {i18n.language == "ar" ? "بدون أضافات" : "No Toppings"}
                  </option>
                  {product.toppingsPrize?.medium && (
                    <option
                      className="text-gray-700"
                      value={product.toppingsPrize?.medium}
                    >
                      {i18n.language == "ar" ? "وســط" : "medium"} :
                      {product.toppingsPrize?.medium} $
                    </option>
                  )}
                  {product.toppingsPrize?.large && (
                    <option
                      className="text-gray-700"
                      value={product.toppingsPrize?.large}
                    >
                      {i18n.language == "ar" ? "كبيـر" : "Large"} :
                      {product.toppingsPrize?.large} $
                    </option>
                  )}
                </select>
              )}
            </>
          ) : (
            <></>
          )}
          <div>
            {i18n.language == "ar"
              ? product.toppingsAr.map((ele, index) => (
                  <span
                    key={index}
                    className="inline-block m-1 text-sm text-gray-700 bg-red-500 rounded-3xl px-2 py-1"
                  >
                    {ele}
                  </span>
                ))
              : product.toppingsEn.map((ele, index) => (
                  <span
                    key={index}
                    className="inline-block text-sm m-1 text-gray-700 bg-red-500 rounded-3xl px-2 py-1"
                  >
                    {ele}
                  </span>
                ))}
          </div>
          <div className="mt-3 text-2xl">
            {product?.offer ? (
              <span className="flex justify-around items-center">
                <span className="text-decoration-line: line-through font-medium text-red-500">
                  {product.selectSize} $
                </span>
                <span className="font-medium text-amber-500">
                  {parseFloat(
                    eval(
                      product.selectSize -
                        (product.selectSize * product.offerNumber) / 100
                    )
                  )}
                  $
                </span>
                <span className="font-medium text-amber-500">
                  {parseFloat(
                    eval(
                      (product.selectSize -
                        (product.selectSize * product.offerNumber) / 100) *
                        product.amount
                    ).toFixed(2)
                  ) +
                    parseFloat(
                      eval(product.amount * product?.selectToppings).toFixed(2)
                    )}
                  $
                </span>
              </span>
            ) : (
              <span className="font-medium text-amber-500">
                {parseFloat(
                  eval(
                    product.selectSize * product.amount +
                      product.amount * product.selectToppings
                  ).toFixed(2)
                )}
                $
              </span>
            )}
            {/* <span
              className={`text-xl font-semibold text-amber-500 ${
                product.offer ? "" : "text-decoration-line: line-through"
              }`}
            >
              {product.offer
                ? product.offerNumber
                : product.selectSize * product.amount + product.selectToppings}
              $
            </span>
            {product.offer && (
              <span className="text-xl font-semibold text-amber-500 mx-10">
                {product.selectSize * product.amount + product.selectToppings} $
              </span>
            )} */}
          </div>

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
