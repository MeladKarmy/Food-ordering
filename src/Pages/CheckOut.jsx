import React, { useState } from "react";
import LoctionDetails from "../Components/CheckOutComponents/LoctionDetails";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import PayMent from "../Components/CheckOutComponents/PayMent";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cart/Cart";
import { toast } from "react-toastify";
import axios from "axios";

export default function CheckOut({ total }) {
  const { token, userId } = useSelector((state) => state.Auth.token);
  const { products } = useSelector((state) => state.cart);
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  let [dataInfo, setDataInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  let [openPayment, setOpenPayment] = useState(false);
  const dispatch = useDispatch();
  const validationDataInfoForm = () => {
    let error = false;

    if (!new RegExp("^.{4,}$").test(dataInfo.name) && dataInfo.name < 4) {
      error = true;
    }
    if (!new RegExp("^.+@[a-zA-Z_]+?.[a-zA-Z]{2,}$").test(dataInfo.email)) {
      error = true;
    }
    if (!new RegExp("^0[0-9]{10}$").test(dataInfo.phone)) {
      error = true;
    }
    if (!new RegExp("^.{4,}$").test(dataInfo.address)) {
      error = true;
    }
    return error;
  };
  const handelSubmetCach = async () => {
    if (!validationDataInfoForm()) {
      try {
        let { data } = await axios.post(
          "https://foode-order.onrender.com/api/v1/order",
          {
            order: {
              orderItems: [...products],
              shippingDitails: { ...dataInfo },
              user: userId,
              paymentMethod: "Cash",
              totalPrice: total,
            },
          },
          {
            headers: {
              Authorization: "Bearer" + " " + token,
            },
          }
        );
        if (data.status == "success") {
          if (i18n.language == "en")
            toast.success("Success Order Wait us about 30-45 min");
          if (i18n.language == "ar")
            toast.success("تم تنفيذ طلبك بنجاح انتظرنا في خلال 30-45 دقيقة");
          dispatch(clearCart());
          navigateTo("/", { replace: true });
        }
      } catch (err) {
        console.log(err);
        i18n.language == "ar"
          ? toast.error("! يرجي المحاوله مره اخري")
          : toast.error("Data Not Valid Please try again");
      }
    }
  };
  return (
    <div className="container mx-auto mt-36 ">
      <div className=" rounded-3xl p-10 m-6">
        <LoctionDetails setDataInfo={setDataInfo} />
      </div>
      <div className="flex justify-center gap-5 mt-10 text-2xl">
        <button
          onClick={handelSubmetCach}
          className="bg-red-500 px-6 py-2 rounded-3xl text-gray-700 font-semibold"
        >
          {i18n.language == "ar" ? "الدفع نقدا" : "By Cach"}
        </button>
        <button
          className="bg-red-500 px-6 py-2 rounded-3xl text-gray-700 font-semibold"
          onClick={() => setOpenPayment((prev) => !prev)}
        >
          {i18n.language == "ar" ? "دفع فيزا" : "By Visa"}
        </button>
      </div>
      <div className="mt-12 text-center mx-auto ">
        {openPayment && <PayMent />}
      </div>
    </div>
  );
}
