import React, { useState } from "react";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../Redux/Auth/Auth";
import { toast } from "react-toastify";

export default function Login(props) {
  const location = useLocation();
  let path = location?.state?.path || "/";

  console.log(path);
  let { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { token } = useSelector((state) => state.Auth);
  let [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (
      new RegExp("^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$").test(loginValues.email) &&
      loginValues.password.length >= 8
    ) {
      try {
        const { data } = await axios.post(
          "https://foode-order.onrender.com/api/v1/auth/login",
          {
            ...loginValues,
          }
        );
        dispatch(saveToken(data.data.token));
        if (data.data.message === "Login Success") {
          i18n.language == "ar"
            ? toast.success("تم تسجيل الدخول بنجاح")
            : toast.success("Login Success");
          navigateTo(path, { replace: true });
        }
      } catch (error) {
        i18n.language == "ar"
          ? toast.error("حدث خطاء يرجي المحاوله مره اخري")
          : toast.error(
              error?.response?.data?.message || "Something happen wrong"
            );
      }
    } else {
      i18n.language == "ar"
        ? toast.error("الإيميل أو الباسورد غير صحيح")
        : toast.error("Email OR Password Not Valid");
    }
  };
  const onChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="container mx-auto rounded-3xl p-10 mb-10 min-h-full text-black lg:w-8/12 flex-col justify-center items-center bg-white shadow-2xl shadow-gray-400"
      >
        <div className="flex-1 mb-5">
          <Input
            label={`${i18n.language == "ar" ? "الإيميل" : "Email"}`}
            placeholder={`${i18n.language == "ar" ? "الإيميل" : "Email"}`}
            error={`${
              i18n.language == "ar" ? "يجب ادخال ايميل صحيح" : "Email Not Valid"
            }`}
            name="email"
            pattern="^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$"
            // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
            type="email"
            onChange={onChange}
          />
        </div>
        <div className="flex-1">
          <Input
            label={`${i18n.language == "ar" ? "كلمة الســر" : "Password"}`}
            placeholder={`${
              i18n.language == "ar" ? "كلمة الســر" : "Password"
            }`}
            error={`${
              i18n.language == "ar"
                ? "كلمه السر يجب ان تكون 8 ارقام او اكثر"
                : "Password must be 8 digit or more"
            }`}
            name="password"
            pattern="^[0-9]{8,}$"
            type="password"
            onChange={onChange}
            require
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 p-3 rounded-full mt-8 opacity-90 hover:opacity-100"
        >
          {t("contact-page.form.btn")}
        </button>
        <div className="mt-10">
          <Link
            className="font-semibold text-amber-500 text-base"
            to={"register"}
          >
            {i18n.language == "ar" ? "لا تمتلك حساب !" : " If don't have Email"}
            <span className=" font-semibold text-red-500">
              {i18n.language == "ar" ? " سجل الأن" : " Register Now"}
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
