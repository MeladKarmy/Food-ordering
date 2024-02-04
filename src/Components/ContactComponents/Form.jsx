import React, { useState } from "react";
import Input from "./Input";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";

export default function Form() {
  let { t, i18n } = useTranslation();
  let [error, setError] = useState(false);
  let [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    subject: "",
    massage: "",
  });
  const handelFormValidation = () => {
    let error = false;

    if (!new RegExp("^[a-zA-Z]{4,}$").test(contactValues.name)) {
      error = true;
    }
    if (
      !new RegExp("^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$").test(contactValues.email)
    ) {
      error = true;
    }
    if (!new RegExp("^[a-zA-Z]{9,}$").test(contactValues.subject)) {
      error = true;
    }
    if (!new RegExp("^[a-zA-Z]{20,}$").test(contactValues.massage)) {
      error = true;
    }
    return error;
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!handelFormValidation()) {
      try {
        const response = await axios.post(
          "https://foode-order.onrender.com/api/v1/massage",
          {
            ...contactValues,
          }
        );

        if (response.data.status == "success") {
          i18n.language == "ar"
            ? toast.success("تم ارسال رسالتك")
            : toast.success("massage sent success");
          setContactValues({
            name: "",
            email: "",
            subject: "",
            massage: "",
          });
        }
      } catch (error) {
        i18n.language == "ar"
          ? toast.error("تم ارسال هذه الرساله من قبل")
          : toast.error(error.message);
      }
    } else {
      toast.error("Form Not Valid");
    }
  };
  const handleTextAreaChange = (e) => {
    const value = e.target.value;
    if (new RegExp("^[a-zA-Z]{20,}$").test(value)) {
      setError(false);
    } else {
      setError(true);
    }
    setContactValues({ ...contactValues, [e.target.name]: e.target.value });
  };

  const onChange = (e) => {
    setContactValues({ ...contactValues, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="container mx-auto rounded-3xl p-10 mb-10  text-black lg:w-8/12 flex-col justify-center items-center bg-white shadow-lg shadow-gray-400"
    >
      <div className="lg:flex lg:justify-between lg:items-center lg:gap-x-12 mb-4">
        <div className="flex-1 mb-4 lg:mb-0">
          <Input
            label={t("contact-page.form.name")}
            placeholder={t("contact-page.form.name")}
            pattern={"^[a-zA-Z]{4,}$"}
            error={"Name must be more than 4 characters"}
            name="name"
            onChange={onChange}
            value={contactValues.name}
          />
        </div>
        <div className="flex-1">
          <Input
            label={t("contact-page.form.email")}
            placeholder={t("contact-page.form.email")}
            error={"Email Not Valid"}
            name="email"
            pattern="^.+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
            onChange={onChange}
            value={contactValues.email}
          />
        </div>
      </div>
      <div>
        <Input
          label={t("contact-page.form.subject")}
          placeholder={t("contact-page.form.subject")}
          error={"Subject must have more than 9 characters"}
          name="subject"
          pattern={"^[a-zA-Z]{9,}$"}
          onChange={onChange}
          require
          value={contactValues.subject}
        />
      </div>
      <div className="mt-10 rounded-3xl">
        <textarea
          className="p-3 rounded-3xl w-full outline-red-500 border border-gray-500"
          name="massage"
          rows="5"
          placeholder={t("contact-page.form.text-area")}
          error={"Name must have more than 4 characters"}
          onChange={handleTextAreaChange}
          value={contactValues.massage}
        ></textarea>
        <span
          className={`text-red-600 font-semibold ${
            error ? "inline-block" : "hidden"
          }`}
        >
          {i18n.language == "ar"
            ? "يجب ان تحتوي الرساله علي 20 حرف او أكثر"
            : "Massage must have more than 20 characters"}
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-red-500 p-3 rounded-full mt-8 opacity-90 hover:opacity-100"
      >
        {t("contact-page.form.btn")}
      </button>
    </form>
  );
}
