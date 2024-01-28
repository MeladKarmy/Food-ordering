import React, { useEffect, useState } from "react";
import Card from "../Components/CartComponents/Card";
import cartEmpty from "../assets/Food App/cart-empty.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  let [totalPrice, setTotalPrice] = useState(0);
  let setPrice = () => {
    let checkOut = products.reduce((prev, product) => {
      let totalProduct = product.size.medium * product.amount;
      return prev + totalProduct;
    }, 0);
    setTotalPrice(checkOut);
  };
  useEffect(() => {
    setPrice();
  }, [products]);
  return (
    <div className="mt-36  ">
      <div className="overflow-x-auto w-full px-10">
        {products && products.length ? (
          <div>
            <table className="border-collapse border m-auto w-full ">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">{i18n.language == "ar" ? "م" : "NO"}</th>
                  <th className="p-3">
                    {i18n.language == "ar" ? "أسم المنتج" : "Product Name"}
                  </th>
                  <th className="p-3">
                    {i18n.language == "ar" ? "صورة المنتج" : "Product Image"}
                  </th>
                  <th className="p-3">
                    {i18n.language == "ar" ? "كمية المنتج" : "Product Count"}
                  </th>
                  <th className="p-3">
                    {i18n.language == "ar" ? "سعر المنتج" : "Price of Product"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">
                      {i18n.language == "ar" ? product.nameAr : product.nameEn}
                    </td>
                    <td className="p-3">
                      <img
                        className="w-20"
                        src={product.image}
                        alt={product.nameEn}
                      />
                    </td>
                    <td className="p-3">{product.amount}</td>
                    <td className="p-3">20 $</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => navigateTo("/checkout")}>Checkout</button>
          </div>
        ) : (
          <>
            <div className="text-center  w-full flex justify-center items-center">
              <img src={cartEmpty} alt="" className="text-center" />
            </div>
            <button
              className="bg-red-500 px-3 py-1 rounded-3xl text-gray-700 font-semibold"
              onClick={() => {
                navigateTo("/menu");
              }}
            >
              {i18n.language == "ar" ? "تصفح القائمة" : "Go to Menu"}
            </button>
          </>
        )}
      </div>
      <div className="w-full">
        {products && (
          <div>
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      {/* <p>Total Price : {totalPrice} $</p> */}
    </div>
  );
}
