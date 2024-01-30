import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "../../Redux/theme/Theme";
import { useNavigate } from "react-router-dom";
import { cartProducts } from "../../Redux/cart/Cart";
import { logout } from "../../Redux/Auth/Auth";

export default function Them() {
  let dispatch = useDispatch();
  let { theme } = useSelector((state) => state.theme);
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    if (i18n.language == "ar") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ar");
    }
    document.body.dir = i18n.dir();
  };
  let cart = useSelector(cartProducts);
  let isLogin = useSelector((state) => state.Auth.token.token);
  const toggleTheme = () => {
    dispatch(toggleThemeMode());
  };
  const navigateTo = useNavigate();
  const navgiateToCart = () => {
    navigateTo("/cart");
  };
  const handelLogOut = () => {
    dispatch(logout());
    navigateTo("/", { replace: true });
  };
  return (
    <div className="flex justify-between items-center gap-1">
      <button
        onClick={navgiateToCart}
        className="block py-1 px-3 rounded-xl text-red-500  transition-opacity duration-1000 hover:opacity-100 relative"
      >
        <i className="fa-solid fa-cart-shopping text-2xl"></i>
        <span className="absolute -top-2 left-5 font-semibold   text-red-500 bg-amber-500 rounded-full px-[4px] py-0 -z-10 ">
          {cart.length}
        </span>
      </button>
      <button
        className="block py-1 px-3 rounded-xl bg-red-500 opacity-50 transition-opacity duration-1000 hover:opacity-100"
        onClick={changeLanguage}
      >
        {i18n.language == "en"
          ? t("navbare.button-translate.ar")
          : t("navbare.button-translate.en")}
      </button>

      <button
        className="block p-1 rounded-xl  bg-red-500 opacity-50 transition-opacity duration-1000 hover:opacity-100"
        onClick={toggleTheme}
      >
        {theme == "dark" ? (
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-slate-300"
              d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
            />
            <path
              className="fill-slate-400"
              d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
            />
          </svg>
        ) : (
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-slate-400"
              d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
            />
            <path
              className="fill-slate-500"
              d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
            />
          </svg>
        )}
      </button>
      {!isLogin ? (
        <button
          className="block py-1 px-3 rounded-xl bg-red-500 opacity-50 transition-opacity duration-1000 hover:opacity-100"
          onClick={() => navigateTo("/login")}
        >
          <i className="fa-solid fa-right-to-bracket"></i>
        </button>
      ) : (
        <button
          className="block py-1 px-3 rounded-xl bg-red-500 opacity-50 transition-opacity duration-1000 hover:opacity-100"
          onClick={handelLogOut}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
      )}
    </div>
  );
}
