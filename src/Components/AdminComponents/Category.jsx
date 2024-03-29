import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../../Components/hooks/FetchData";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Error from "../Error";

export default function Category() {
  const { t, i18n } = useTranslation();
  let { data, isPending, error } = useFetch("category");
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
                {i18n.language == "ar" ? "أسم الفئة" : "category Name"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "صورة الفئة" : "category Image"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "حالة" : "Status"}
              </th>
              <th className="p-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((category, index) => (
              <tr
                onClick={() => navigateTO(category._id)}
                key={index}
                className={`cursor-pointer ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 text-red-500 font-semibold ">
                  {i18n.language == "ar" ? category.nameAr : category.nameEn}
                </td>
                <td className="p-3">
                  <img
                    className="w-20"
                    src={category.image}
                    alt={category.nameEn}
                  />
                </td>
                <td className="p-3 text-red-500 font-semibold ">
                  <i
                    className={`${
                      !category.status
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
