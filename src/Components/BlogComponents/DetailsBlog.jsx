import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function DetailsBlog({ product }) {
  const { t, i18n } = useTranslation();
  const cart = useSelector((state) => state.cart.products);

  const handelCount = () => {
    if (!cart) return 1;
    let x = cart.find((prod) => prod._id == product?._id);
    if (x) return x.amount;
    else return 1;
  };
  return (
    <div className="mt-6 md:m-0 flex flex-col justify-around content-between items-stretch gap-10 text-start">
      <h4 className="text-4xl font-semibold text-red-500">
        {i18n.language == "ar" ? product.nameAr : product.nameEn}
      </h4>
      <p className="text-4xl font-semibold text-amber-500">
        <span className="text-amber-400">★ ★ ★ ★ ☆</span>
      </p>
      <h4 className="text-4xl font-semibold text-red-500">
        {!product.offer ? (
          `${product?.size?.medium} $`
        ) : (
          <span className="flex justify-start items-center gap-x-16 ">
            <span className="text-decoration-line: line-through font-medium text-red-500">
              {product?.size?.medium} $
            </span>
            <span className="text-amber-500">
              {product?.size?.medium -
                (product?.size?.medium * product.offerNumber) / 100}
              $
            </span>
          </span>
        )}
      </h4>
      <p className="text-xl font-semibold text-red-500">
        {i18n.language == "ar"
          ? product?.descriptionAr
          : product?.descriptionEn}
      </p>
      <div className="text-red-500">
        {/* <button
          disabled={handelCount() <= 1}
          onClick={() => dispatch(decrement(product))}
          className="m-5 text-4xl"
        >
          -
        </button> */}
        <span className="text-3xl">
          {i18n.language == "ar" ? "الكمية" : "Quantity"} : {handelCount()}
        </span>
        {/* <button
          onClick={() => dispatch(increment(product))}
          className="m-5 text-3xl"
        >
          +
        </button> */}
      </div>
    </div>
  );
}
