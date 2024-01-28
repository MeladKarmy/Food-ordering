import React, { useEffect, useState } from "react";
import useFetch from "../hooks/FetchData";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import Input from "./Input";
import axios from "axios";
import Alert from "../Alert";
import { toast } from "react-toastify";
import Card from "../CartComponents/Card";

export default function EditPizza() {
  let { id, category } = useParams();
  let { data, isPending, error } = useFetch(`pizza/${id}`);
  let { t, i18n } = useTranslation();
  let [offer, setOffer] = useState(false);
  let [pizzaValues, setPizzaValues] = useState({
    nameEn: data?.nameEn,
    nameAr: "",
    quantity: 1,
    image: "",
    descriptionEn: "",
    descriptionAr: "",
    toppingsEn: "",
    toppingsAr: "",
    category: `${category}`,
    size: {
      small: "",
      meduim: "",
      large: "",
    },
    toppingsPrize: {
      meduim: "",
      large: "",
    },
    offer: false,
    offerNumber: "",
  });
  const handelSubmit = async (e) => {
    e.preventDefault();
    toast.success(
      <>
        <p>hello</p>
        <span>huy</span>
        <br />
        good
      </>
    );
    try {
      const response = await axios.post("http://localhost:3030/api/v1/pizza", {
        ...pizzaValues,
      });
      i18n.language == "ar"
        ? Swal.fire("تم ارسال رسالتك")
        : Swal.fire("massage sent success");
    } catch (error) {
      console.log(error);
      //   i18n.language == "ar"
      //     ? Swal.fire("تم ارسال هذه الرساله من قبل")
      //     : Swal.fire(error.response.data.message);
    }
  };
  const onChange = (e) => {
    setPizzaValues({ ...pizzaValues, [e.target.name]: e.target.value });
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
                pizzaValues.nameEn || i18n.language == "ar"
                  ? "الاسم بالانجليزية"
                  : "Name En"
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
              label={`${i18n.language == "ar" ? "الكمية" : "Quantity"}`}
              placeholder={`${i18n.language == "ar" ? "الكمية" : "Quantity"}`}
              error={`${
                i18n.language == "ar"
                  ? "يجب ادخال كمية صحيحيه"
                  : "Quantity Not Valid"
              }`}
              name="quantity"
              type="number"
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
              onChange={onChange}
              require
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-5">
          <div className="flex-1 mb-4 lg:mb-0">
            <Input
              label={`${
                i18n.language == "ar" ? "الأضافات  بالانجليزية" : "Toppings En"
              }`}
              placeholder={`${
                i18n.language == "ar" ? "الأضافات  بالانجليزية" : "Toppings En"
              }`}
              error={`${
                i18n.language == "ar"
                  ? "الأضافات يجب ان تكون بالانجليزية"
                  : "Toppings must be in English"
              }`}
              name="toppingsEn"
              pattern="^[A-Za-zs]{15,}$"
              type="text"
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
              onChange={onChange}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-5">
          <div className="flex-1 mb-4 lg:mb-0">
            <select
              name="offer"
              value={pizzaValues.offer}
              className="inline-block m-1 text-gray-700 appearance-none w-1/2 bg-white-500 border border-gray-300 py-1 px-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => {
                setPizzaValues({
                  ...pizzaValues,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <option
                onClick={() => setPizzaValues({ ...pizzaValues, offer: false })}
                value={false}
              >
                No Offer
              </option>
              <option
                onClick={() => setPizzaValues({ ...pizzaValues, offer: true })}
                value={true}
              >
                Offer
              </option>
            </select>
          </div>
          {pizzaValues.offer && (
            <div className="flex-1">
              <Input
                label={`${i18n.language == "ar" ? "الخصم" : "offer"}`}
                placeholder={`${i18n.language == "ar" ? "الخصم" : "offer"}`}
                name="size"
                type="number"
                onChange={onChange}
                require="require"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 p-3 rounded-full mt-8 opacity-90 hover:opacity-100"
        >
          {t("contact-page.form.btn")}
        </button>
      </form>
    </div>
  );
}
