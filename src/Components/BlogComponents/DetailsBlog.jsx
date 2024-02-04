import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../../Redux/cart/Cart";

export default function DetailsBlog({ product }) {
  const { t, i18n } = useTranslation();
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const handelCount = () => {
    if (!cart) return 1;
    let x = cart.find((prod) => prod._id == product?._id);
    if (x) return x.amount;
    else return 1;
  };
  const handelIncrement = () => {
    let currentProduct = cart.find(
      (currentProduct) => currentProduct._id == product._id
    );

    if (currentProduct) {
      dispatch(increment(product));
    } else {
      dispatch(
        addToCart({
          ...product,
          amount: 1,
          selectSize: product?.size?.medium | 0,
          selectToppings: 0,
        })
      );
      dispatch(increment(product));
    }
  };
  const handelDecrement = () => {
    let currentProduct = cart.find(
      (currentProduct) => currentProduct._id == product._id
    );
    if (currentProduct) {
      dispatch(decrement(product));
    } else {
      dispatch(
        addToCart({
          ...product,
          amount: 1,
          selectSize: product?.size?.medium || 0,
          selectToppings: 0,
        })
      );
      dispatch(decrement(product));
    }
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
        <button
          disabled={handelCount() <= 1}
          onClick={handelDecrement}
          className="m-5 text-4xl"
        >
          -
        </button>
        <span className="text-3xl">{handelCount()}</span>
        <button onClick={handelIncrement} className="m-5 text-3xl">
          +
        </button>
      </div>
    </div>
  );
}
