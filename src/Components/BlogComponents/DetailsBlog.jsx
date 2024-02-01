import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrement, increment } from "../../Redux/cart/Cart";

export default function DetailsBlog({ title, category, price, desc, product }) {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const handelCount = () => {
    if (!cart) return 1;
    let x = cart.find((prod) => prod._id == product?._id);
    if (x) return x.amount;
    else return 1;
  };
  const cart = useSelector((state) => state.cart.products);
  const handelIncrement = () => {
    let currentProduct = cart.find(
      (currentProduct) => currentProduct._id == product._id
    );
    if (currentProduct) {
      dispatch(increment(product));
    } else {
      dispatch(addToCart(product));
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
      dispatch(addToCart(product));
      dispatch(decrement(product));
    }
  };
  return (
    <div className="mt-6 md:m-0 flex flex-col justify-around content-between items-stretch gap-10 text-start">
      <h4 className="text-4xl font-semibold text-red-500">
        {i18n.language == "ar" ? title.ar : title.en}
      </h4>
      <p className="text-4xl font-semibold text-amber-500">
        <span className="text-amber-400">★ ★ ★ ★ ☆</span>
      </p>
      <h4 className="text-4xl font-semibold text-red-500">{price?.medium} $</h4>
      <p className="text-xl font-semibold text-red-500">
        {i18n.language == "ar" ? desc.ar : desc.en}
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
