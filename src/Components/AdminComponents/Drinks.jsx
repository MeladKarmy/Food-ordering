import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../../Components/hooks/FetchData";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Error from "../Error";

export default function Drinks() {
  const { t, i18n } = useTranslation();
  let { data, isPending, error } = useFetch(
    "pizza/?category=6591c2c3c3712f4ba4e758b7"
  );
  const navigateTO = useNavigate();
  return (
    <div>
      {error ? (
        <Error error={error} />
      ) : isPending ? (
        <Spinner />
      ) : (
        <table className="border-collapse border text-gray-700 m-auto w-full ">
          <thead className="bg-amber-500">
            <tr>
              <th className="p-3">{i18n.language == "ar" ? "م" : "NO"}</th>
              <th className="p-3">
                {i18n.language == "ar" ? "أسم المنتج" : "Product Name"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "صورة المنتج" : "Product Image"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "سعر المنتج" : "Price of Product"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "عروض" : "Offers"}
              </th>
              <th className="p-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product, index) => (
              <tr
                onClick={() => navigateTO(product._id)}
                key={index}
                className={`cursor-pointer ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 text-red-500 font-semibold ">
                  {i18n.language == "ar" ? product.nameAr : product.nameEn}
                </td>
                <td className="p-3">
                  <img
                    className="w-20"
                    src={product.image}
                    alt={product.nameEn}
                  />
                </td>
                <td className="p-3 font-semibold">
                  <p className="flex justify-between items-center">
                    <span>{i18n.language == "ar" ? "صغير" : "small"} :</span>
                    <span> {product.size.small}</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span>{i18n.language == "ar" ? "وســط" : "medium"} :</span>
                    <span> {product.size.medium}</span>
                  </p>
                  <p className="flex justify-between items-center">
                    <span>{i18n.language == "ar" ? "كبيـر" : "large"} :</span>
                    <span> {product.size.large}</span>
                  </p>
                </td>
                <td className="p-3">
                  <i
                    className={`${
                      !product.offer
                        ? "fa-solid fa-circle-xmark text-red-600 font-semibold text-xl"
                        : "fa-regular fa-circle-check text-green-600 font-semibold text-xl"
                    }`}
                  ></i>
                </td>
                <td className="p-3 flex flex-col justify-center justify-items-center gap-5 items-center text-xl ">
                  <i className="fa-solid fa-trash text-red-600 hover:scale-110 cursor-pointer"></i>
                  <i className="fa-solid fa-file-pen text-amber-400 hover:scale-110 cursor-pointer"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
