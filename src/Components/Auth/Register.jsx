import React, { useState } from "react";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  let { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  let [registerValues, setRegisterValues] = useState({
    nameEn: "",
    nameAr: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const validationRegister = () => {
    let error = false;

    if (!new RegExp("^[A-Za-zs]{4,}$").test(registerValues.nameEn)) {
      error = true;
    }
    if (!new RegExp("^[\u0600-\u06FFs]{4,}$").test(registerValues.nameAr)) {
      error = true;
    }
    if (
      !new RegExp("^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$").test(registerValues.email)
    ) {
      error = true;
    }
    if (!new RegExp("^[0-9]{11}$").test(registerValues.phone)) {
      error = true;
    }
    if (!new RegExp("^[0-9]{11}$").test(registerValues.password)) {
      error = true;
    }
    if (
      !new RegExp(registerValues.password).test(registerValues.confirmPassword)
    ) {
      error = true;
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!validationRegister()) {
      try {
        const { data } = await axios.post(
          "https://foode-order.onrender.com/api/v1/auth/register",
          {
            ...registerValues,
          }
        );
        if (data.data.message === "Sign up Success")
          i18n.language == "ar"
            ? toast.success("تم تسجيلك بنجاح")
            : toast.success("Sign up Success");
        navigateTo("/login", { replace: true });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      i18n.language == "ar"
        ? toast.error("حدث خطأ مـا يرجي المحاوله مره أخري")
        : toast.error("Something happen wrong");
    }
  };
  const onChange = (e) => {
    setRegisterValues({ ...registerValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form
        onSubmit={handelSubmit}
        className="container mx-auto rounded-3xl p-10 mb-10  text-black lg:w-8/12 flex-col justify-center items-center bg-white shadow-2xl shadow-gray-400"
      >
        <div className="flex flex-col md:flex-row md:gap-x-5 mb-3">
          <div className="flex-1 mb-4 lg:mb-0">
            <Input
              label={`${
                i18n.language == "ar" ? "الاسم بالانجليزية" : "Name En"
              }`}
              placeholder={`${
                i18n.language == "ar" ? "الاسم بالانجليزية" : "Name En"
              }`}
              pattern={"^[A-Za-zs]{4,}$"}
              error={`${
                i18n.language == "ar"
                  ? "الأسم بالانجليزية يجب ادخال علي الاقل 4 حروف"
                  : "Name In English must be more than 4 characters"
              }`}
              name="nameEn"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="flex-1 mb-4 lg:mb-0">
            <Input
              label={`${i18n.language == "ar" ? "الاسم بالعربية" : "Name Ar"}`}
              placeholder={`${
                i18n.language == "ar" ? "الاسم بالعربية" : "Name Ar"
              }`}
              pattern={"^[\u0600-\u06FFs]{4,}$"}
              error={`${
                i18n.language == "ar"
                  ? "يجب ادخال علي الاقل 4 حروف"
                  : "Name In Arabic must be more than 4 characters"
              }`}
              name="nameAr"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-5 mb-3">
          <div className="flex-1 mb-4 lg:mb-0">
            <Input
              label={`${i18n.language == "ar" ? "الإيميل" : "Email"}`}
              placeholder={`${i18n.language == "ar" ? "الإيميل" : "Email"}`}
              error={`${
                i18n.language == "ar"
                  ? "يجب ادخال ايميل صحيح"
                  : "Email Not Valid"
              }`}
              name="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
              type="email"
              onChange={onChange}
            />
          </div>
          <div className="flex-1 ">
            <Input
              label={`${i18n.language == "ar" ? "موبــايل" : "Phone"}`}
              placeholder={`${i18n.language == "ar" ? "موبــايل" : "Phone"}`}
              error={`${
                i18n.language == "ar"
                  ? "يجب ان يكون 11 رقم"
                  : "Phone must be 11 digit"
              }`}
              name="phone"
              pattern="^[0-9]{11}$"
              type="number"
              onChange={onChange}
              require
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-5">
          <div className="flex-1 mb-4 lg:mb-0">
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
          <div className="flex-1">
            <Input
              label={`${
                i18n.language == "ar" ? "تأكيد كلمه الســر" : "Confirm Password"
              }`}
              placeholder={`${
                i18n.language == "ar" ? "تأكيد كلمه الســر" : "Confirm Password"
              }`}
              error={`${
                i18n.language == "ar"
                  ? "كلمه السـر غير متطابقة"
                  : "Password Not Match"
              }`}
              name="confirmPassword"
              pattern={registerValues.password}
              type="password"
              onChange={onChange}
              require
            />
          </div>
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
            to={"/login"}
          >
            {i18n.language == "ar"
              ? "لديك حساب بالفعل !"
              : " Already have Email !"}
            <span className=" font-semibold text-red-500">
              {i18n.language == "ar" ? " سجل دخولك الأن" : " Login Now"}
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}
