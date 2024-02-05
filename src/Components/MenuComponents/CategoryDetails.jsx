import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/FetchData";
import { NavLink } from "react-router-dom";

export default function CategoryDetails({ handelFilter }) {
  const { t, i18n } = useTranslation();
  let [category, setCategory] = useState("All");
  let { data, isPending, error } = useFetch(`category`);
  const hanelActive = (filter) => {
    handelFilter(filter);
    setCategory(filter);
  };
  return (
    <div className="flex justify-center md:justify-around  items-center  md:p-4">
      {data && (
        <>
          <NavLink
            onClick={() => hanelActive("All")}
            className={() =>
              category == "All"
                ? "border border-none rounded-full px-4 py-1 mb-1 font-bold text-gray-600 bg-amber-500 hover:bg-amber-500"
                : "border border-none rounded-full px-4 py-1 mb-1  font-bold text-gray-600 hover:bg-amber-500"
            }
          >
            <img
              loading="lazy"
              src={data[2].image}
              alt="products"
              className="w-20 h-20 rounded-full"
            />
            <p className="text-xl font-semibold text-red-500 whitespace-nowrap">
              {i18n.language == "ar" ? "الجميع" : "All"}
            </p>
          </NavLink>
          {data?.map((service, index) => (
            <NavLink
              key={index}
              onClick={() => hanelActive(service?.nameEn)}
              className={() =>
                category == service.nameEn
                  ? "border border-none rounded-full px-4 py-1 mb-1 font-bold text-gray-600 bg-amber-500 hover:bg-amber-500"
                  : "border border-none rounded-full px-4 py-1 mb-1  font-bold text-gray-600 hover:bg-amber-500"
              }
            >
              <img
                loading="lazy"
                src={service.image}
                alt={service.nameEn}
                className="w-20 h-20 rounded-full"
              />
              <p className="text-xl font-semibold text-red-500 whitespace-nowrap">
                {i18n.language == "ar" ? service.nameAr : service.nameEn}
              </p>
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
}
