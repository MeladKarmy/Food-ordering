import React from "react";
import { useTranslation } from "react-i18next";
import useFetch from "../../Components/hooks/FetchData";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import Error from "../Error";

export default function Orders() {
  const { t, i18n } = useTranslation();
  let { data, isPending, error } = useFetch("order");
  const navigateTO = useNavigate();
  console.log(data);

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
                {i18n.language == "ar" ? "أسم المستخدم" : "User Name"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "السعر الأجمالي" : "totalPrice"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "عدد المنتجات" : "Products Count"}
              </th>
              <th className="p-3">
                {i18n.language == "ar" ? "تاريخ الدفع" : "paidAt"}
              </th>
              <th className="p-3">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order, index) => (
              <tr
                // onClick={() => navigateTO(order._id)}
                key={index}
                className={`cursor-pointer ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3 text-red-500 font-semibold ">
                  {i18n.language == "ar"
                    ? order?.user?.nameAr
                    : order?.user?.nameEn}
                </td>
                <td className="p-3 font-semibold">{order?.totalPrice}$</td>
                <td className="p-3">{order?.orderItems?.length}</td>
                <td className="p-3 font-semibold">
                  {order?.paidAt.slice(0, 10) +
                    " - " +
                    order?.paidAt.slice(11, 19)}
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
