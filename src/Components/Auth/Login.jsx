import React, { useState } from "react";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Login() {
  let { t, i18n } = useTranslation();
  let [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3030/api/v1/auth", {
        ...loginValues,
      });
      i18n.language == "ar"
        ? Swal.fire("تم ارسال رسالتك")
        : Swal.fire("massage sent success");
    } catch (error) {
      i18n.language == "ar"
        ? Swal.fire("تم ارسال هذه الرساله من قبل")
        : Swal.fire(error.response.data.message);
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
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
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
