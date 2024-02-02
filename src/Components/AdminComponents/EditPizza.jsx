import React, { useEffect, useState } from "react";
import useFetch from "../hooks/FetchData";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import Error from "../Error";

export default function EditPizza() {
  let { id, category } = useParams();
  let { data, isPending, error } = useFetch(`pizza/${id}`);
  let { t, i18n } = useTranslation();
  let [pizzaValues, setPizzaValues] = useState({
    nameEn: data?.nameEn || "",
    nameAr: data?.nameAr || "",
    quantity: data?.quantity || "",
    image: data?.image || "",
    descriptionEn: data?.descriptionEn || "",
    descriptionAr: data?.descriptionAr || "",
    toppingsEn: data?.toppingsEn || "".split(","),
    toppingsAr: data?.toppingsAr || "".split(","),
    category: data?.category?._id || category,
    size: {
      small: data?.size?.small || "",
      meduim: data?.size?.medium || "",
      large: data?.size?.large || "",
    },
    toppingsPrize: {
      meduim: data?.toppingsPrize?.medium || "",
      large: data?.toppingsPrize?.large || "",
    },
    offer: data?.offer || false,
    offerNumber: data?.offerNumber || "",
  });
  useEffect(() => {
    if (data) {
      setPizzaValues((prevValues) => ({
        ...prevValues,
        nameEn: data?.nameEn || "",
        nameAr: data?.nameAr || "",
        quantity: data?.quantity || "",
        image: data?.image || "",
        descriptionEn: data?.descriptionEn || "",
        descriptionAr: data?.descriptionAr || "",
        toppingsEn: data?.toppingsEn || "".split(","),
        toppingsAr: data?.toppingsAr || "".split(","),
        category: data?.category?._id || `${category}`,
        size: {
          small: data?.size?.small || "",
          meduim: data?.size?.medium || "",
          large: data?.size?.large || "",
        },
        toppingsPrize: {
          meduim: data?.toppingsPrize?.medium || "",
          large: data?.toppingsPrize?.large || "",
        },
        offer: data?.offer || false,
        offerNumber: data?.offerNumber || "",
      }));
    }
  }, [data]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    toast.success("good");
    try {
      const response = await axios.post("http://localhost:3030/api/v1/pizza", {
        ...pizzaValues,
      });
      i18n.language == "ar"
        ? toast.success("تم ارسال رسالتك")
        : toast.success("massage sent success");
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    setPizzaValues({ ...pizzaValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {isPending && <Spinner />}
      {error ? (
        <Error error={error} />
      ) : (
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
                value={pizzaValues.nameEn}
                onChange={onChange}
              />
            </div>
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${
                  i18n.language == "ar" ? "الاسم بالعربية" : "Name Ar"
                }`}
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
                value={pizzaValues.nameAr}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-5 mb-3">
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${i18n.language == "ar" ? "الكمية" : "Quantity"}`}
                placeholder={`${i18n.language == "ar" ? "الكمية" : "Quantity"}`}
                error={`${
                  i18n.language == "ar"
                    ? "يجب ادخال كمية صحيحيه"
                    : "Quantity Not Valid"
                }`}
                name="quantity"
                type="number"
                value={pizzaValues.quantity}
                onChange={onChange}
              />
            </div>
            <div className="flex-1 ">
              <Input
                label={`${i18n.language == "ar" ? "صورة" : "Image"}`}
                placeholder={`${i18n.language == "ar" ? "صورة" : "Image"}`}
                error={`${
                  i18n.language == "ar"
                    ? "يجب ان يحتوي المنتج علي صورة"
                    : "Image Is Require"
                }`}
                name="image"
                pattern=""
                type="text"
                value={pizzaValues.image}
                onChange={onChange}
                require
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${
                  i18n.language == "ar" ? "الوصف بالانجليزية" : "description En"
                }`}
                placeholder={`${
                  i18n.language == "ar" ? "الوصف بالانجليزية" : "description En"
                }`}
                error={`${
                  i18n.language == "ar"
                    ? "الوصف يجب ان يكون بالانجليزية و 15 حرف او اكثر"
                    : "Description must be in English & 15 char or more "
                }`}
                name="descriptionEn"
                pattern="^[A-Za-zs]{15,}$"
                type="text"
                value={pizzaValues.descriptionEn}
                onChange={onChange}
                require
              />
            </div>
            <div className="flex-1">
              <Input
                label={`${
                  i18n.language == "ar" ? "الوصف بالعربية" : "description Ar"
                }`}
                placeholder={`${
                  i18n.language == "ar" ? "الوصف بالعربية" : "description Ar"
                }`}
                error={`${
                  i18n.language == "ar"
                    ? "الوصف يجب ان يكون بالعربي و 15 حرف او اكثر"
                    : "Description must be in Arabic & 15 char or more "
                }`}
                name="descriptionAr"
                pattern="^[\u0600-\u06FFs]{15,}$"
                type="text"
                value={pizzaValues.descriptionAr}
                onChange={onChange}
                require
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${
                  i18n.language == "ar"
                    ? "الأضافات  بالانجليزية"
                    : "Toppings En"
                }`}
                placeholder={`${
                  i18n.language == "ar"
                    ? "الأضافات  بالانجليزية"
                    : "Toppings En"
                }`}
                error={`${
                  i18n.language == "ar"
                    ? "الأضافات يجب ان تكون بالانجليزية"
                    : "Toppings must be in English"
                }`}
                name="toppingsEn"
                pattern="^[A-Za-zs]{15,}$"
                type="text"
                value={pizzaValues.toppingsEn}
                onChange={onChange}
                require
              />
            </div>
            <div className="flex-1">
              <Input
                label={`${
                  i18n.language == "ar" ? "الأضافات  بالعربية" : "Toppings Ar"
                }`}
                placeholder={`${
                  i18n.language == "ar" ? "الأضافات  بالعربية" : "Toppings Ar"
                }`}
                error={`${
                  i18n.language == "ar"
                    ? "الأضافات يجب ان تكون بالعربية"
                    : "Toppings must be in Arabic"
                }`}
                name="toppingsAr"
                pattern="^[\u0600-\u06FFs]{15,}$"
                type="text"
                value={pizzaValues.toppingsAr}
                onChange={onChange}
                require
              />
            </div>
          </div>
          <h3 className="mt-3 font-semibold text-red-500 text-lg">
            {i18n.language == "ar"
              ? "أسعار الأحجام المختلفة"
              : "Price Of Size Of Products"}
          </h3>
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${i18n.language == "ar" ? "كبير" : "Large"}`}
                placeholder={`${i18n.language == "ar" ? "كبير" : "Large"}`}
                name="size"
                pattern="^[A-Za-zs]{15,}$"
                type="number"
                value={pizzaValues.size.large}
                onChange={onChange}
              />
            </div>
            <div className="flex-1">
              <Input
                label={`${i18n.language == "ar" ? "وسـط" : "Meduim"}`}
                placeholder={`${i18n.language == "ar" ? "وسـط" : "Meduim"}`}
                name="size"
                pattern="^[A-Za-zs]{15,}$"
                type="number"
                value={pizzaValues.size.meduim}
                onChange={onChange}
              />
            </div>
            <div className="flex-1">
              <Input
                label={`${i18n.language == "ar" ? "صغير" : "Small"}`}
                placeholder={`${i18n.language == "ar" ? "صغير" : "Small"}`}
                name="size"
                pattern="^[A-Za-zs]{15,}$"
                type="number"
                value={pizzaValues.size.small}
                onChange={onChange}
              />
            </div>
          </div>
          <h3 className="mt-3 font-semibold text-red-500 text-lg">
            {i18n.language == "ar"
              ? "أسعار الأضافات المختلفة"
              : "Price Of Size Of Toppings"}
          </h3>
          <div className="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex-1 mb-4 lg:mb-0">
              <Input
                label={`${i18n.language == "ar" ? "كبير" : "Large"}`}
                placeholder={`${i18n.language == "ar" ? "كبير" : "Large"}`}
                name="size"
                pattern="^[A-Za-zs]{15,}$"
                type="number"
                value={pizzaValues.toppingsPrize.meduim}
                onChange={onChange}
              />
            </div>
            <div className="flex-1">
              <Input
                label={`${i18n.language == "ar" ? "وسـط" : "Meduim"}`}
                placeholder={`${i18n.language == "ar" ? "وسـط" : "Meduim"}`}
                name="size"
                pattern="^[A-Za-zs]{15,}$"
                type="number"
                value={pizzaValues.toppingsPrize.large}
                onChange={onChange}
              />
            </div>
          </div>
          <h3 className="mt-3 font-semibold text-red-500 text-lg">
            {i18n.language == "ar" ? "العروض" : "Offers"}
          </h3>

          <div className="flex flex-col md:flex-row md:items-start md:justify-start md:gap-x-5">
            <div className="flex-1 mb-4 lg:mb-0">
              <label className="mb-3 px-2">
                {`${i18n.language == "ar" ? "أضافه عرض" : "Offer"}`} : <br />
                <select
                  name="offer"
                  value={pizzaValues.offer}
                  className="inline-block m-3 text-gray-700 appearance-none w-full bg-white-500 border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={(e) => {
                    setPizzaValues({
                      ...pizzaValues,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option
                    onClick={() =>
                      setPizzaValues({ ...pizzaValues, offer: false })
                    }
                    value={false}
                  >
                    {`${i18n.language == "ar" ? "دون عروض" : "No Offer"}`}
                  </option>
                  <option
                    onClick={() =>
                      setPizzaValues({ ...pizzaValues, offer: true })
                    }
                    value={true}
                  >
                    {`${i18n.language == "ar" ? "أضافه عرض" : "offer"}`}
                  </option>
                </select>
              </label>
            </div>
            <div className="flex-1">
              <Input
                label={`${i18n.language == "ar" ? "الخصم" : "offer"}`}
                placeholder={`${
                  i18n.language == "ar" ? "الخصم بالارقام " : "offer by number"
                }`}
                name="offerNumber"
                type="number"
                error="error"
                value={pizzaValues.offerNumber}
                disabled={pizzaValues.offer}
                onChange={onChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 p-3 rounded-full mt-8 opacity-90 hover:opacity-100"
          >
            {t("contact-page.form.btn")}
          </button>
        </form>
      )}
    </div>
  );
}
