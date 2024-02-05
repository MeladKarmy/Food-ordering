import React from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";

export default function LoctionDetails({ setDataInfo }) {
  const { t, i18n } = useTranslation();
  const onChange = (e) => {
    setDataInfo((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="container mx-auto rounded-3xl  p-10 text-black lg:w-8/12 flex-col justify-center items-center bg-white shadow-2xl shadow-gray-400">
      <div className="flex flex-col md:flex-row md:gap-x-5 mb-3">
        <div className="flex-1 mb-4 lg:mb-0">
          <Input
            label={i18n.language == "ar" ? "الأسم" : "Name"}
            placeholder={i18n.language == "ar" ? "الأسم" : "Name"}
            pattern={"^.{4,}$"}
            error={`${
              i18n.language == "ar"
                ? " يجب ادخال علي الاقل 4 حروف"
                : "Must be more than 4 characters"
            }`}
            name="name"
            type="text"
            onChange={onChange}
          />
        </div>

        <div className="flex-1 mb-4 lg:mb-0">
          <Input
            label={i18n.language == "ar" ? "إيميل" : "Email"}
            placeholder={i18n.language == "ar" ? "إيميل" : "Email"}
            pattern={"^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$"}
            error={`${
              i18n.language == "ar"
                ? " يجب ادخال إيميل صحيح"
                : "Email must be Valid "
            }`}
            type="email"
            name="email"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-5 mb-3">
        <div className="flex-1 mb-4 lg:mb-0">
          <Input
            label={i18n.language == "ar" ? "موبايل" : "Phone"}
            placeholder={i18n.language == "ar" ? "موبايل" : "Phone"}
            pattern={"^0[0-9]{10}$"}
            error={`${
              i18n.language == "ar"
                ? "رقم هاتف غير صحيح !"
                : "Phone Number Not Valid !"
            }`}
            type="number"
            id="phone"
            name="phone"
            onChange={onChange}
          />
        </div>
        <div className="flex-1 mb-4 lg:mb-0">
          <Input
            label={i18n.language == "ar" ? "العنوان" : "Address"}
            placeholder={i18n.language == "ar" ? "العنوان" : "Address"}
            pattern={"^.{4,}$"}
            error={`${
              i18n.language == "ar"
                ? " يجب ادخال علي الاقل 4 حروف"
                : "Must be more than 4 characters"
            }`}
            type="text"
            name="address"
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
}
