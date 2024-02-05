import React, { useEffect, useState } from "react";
import Card from "../Components/CartComponents/Card";
import cartEmpty from "../assets/Food App/cart-empty.png";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../Redux/cart/Cart";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();
  let [totalPrice, setTotalPrice] = useState(0);
  let [totalAmount, setTotalAmount] = useState(0);
  let setTotal = () => {
    let checkOut = products.reduce((prev, product) => {
      if (!product.offer) {
        let totalProduct =
          product.selectSize * product.amount +
          product.selectToppings * product.amount;
        return prev + totalProduct;
      } else {
        let totalProduct =
          parseFloat(
            eval(
              (product.selectSize -
                (product.selectSize * product.offerNumber) / 100) *
                product.amount
            ).toFixed(3)
          ) +
          parseFloat(eval(product.amount * product?.selectToppings).toFixed(3));
        return prev + totalProduct;
      }
    }, 0);
    setTotalPrice(parseFloat(checkOut.toFixed(3)));
  };
  let setAmount = () => {
    let checkOut = products.reduce((prev, product) => {
      let totalProduct = product.amount;
      return prev + totalProduct;
    }, 0);
    setTotalAmount(checkOut);
  };
  useEffect(() => {
    setTotal();
    setAmount();
  }, [products]);
  return (
    <div className="mt-36  ">
      <div className="overflow-x-auto w-full px-10">
        {products && products.length ? (
          <div>
            <table className="border-collapse border m-auto w-full text-gray-700 font-medium">
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
                  <th className="p-3">
                    {i18n.language == "ar"
                      ? "سعرالأضافات"
                      : "Price of Toppings"}
                  </th>
                  <th className="p-3">
                    {i18n.language == "ar" ? "الاجمالي" : "Total"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="p-3 mt-3 rounded-3xl flex justify-around items-center cursor-pointer text-xl">
                      <i
                        onClick={() => {
                          dispatch(removeFromCart(product));
                        }}
                        className="fa-solid fa-square-xmark  font-semibold "
                      ></i>
                      {index + 1}
                    </td>
                    <td className="p-3 text-red-500">
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
                    <td className="p-3">
                      {product?.offer ? (
                        <span className="flex justify-around items-center">
                          <span className="text-decoration-line: line-through font-medium text-red-500">
                            {product.selectSize} $
                          </span>
                          <span className="font-medium text-amber-500">
                            {parseFloat(
                              eval(
                                product.selectSize -
                                  (product.selectSize * product.offerNumber) /
                                    100
                              )
                            )}
                            $
                          </span>
                        </span>
                      ) : (
                        <span>{product.selectSize} $</span>
                      )}
                    </td>
                    <td className="p-3">
                      {product.selectToppings ? (
                        `${product.selectToppings} $`
                      ) : (
                        <span className="text-red-600 font-semibold text-xl">
                          <i className="fa-solid fa-circle-xmark"></i>
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      {product.offer &&
                        parseFloat(
                          eval(
                            (product.selectSize -
                              (product.selectSize * product.offerNumber) /
                                100) *
                              product.amount
                          ).toFixed(2)
                        ) +
                          parseFloat(
                            eval(
                              product.amount * product?.selectToppings
                            ).toFixed(2)
                          )}
                      {!product.offer &&
                        product.selectSize * product.amount +
                          product?.selectToppings * product.amount}
                      $
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-400">
                <tr>
                  <td className="p-3 font-bold text-xl">
                    {i18n.language == "ar" ? "الأجمالي" : "Total"}
                  </td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3">{totalAmount}</td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3">{totalPrice}$</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <>
            <div className="text-center  w-full flex justify-center items-center">
              <img src={cartEmpty} alt="" className="text-center" />
            </div>
            <button
              className="bg-red-500 px-3 py-1 m-5 rounded-3xl text-gray-700 font-semibold"
              onClick={() => {
                navigateTo("/menu");
              }}
            >
              {i18n.language == "ar" ? "تصفح القائمة" : "Go to Menu"}
            </button>
          </>
        )}
      </div>
      {products.length > 0 && (
        <button
          className="bg-green-400 m-3 text-xl rounded-2xl py-2 px-6 font-semibold opacity-90 hover:opacity-100"
          onClick={() => navigateTo("/checkout")}
        >
          {i18n.language == "ar" ? "الدفع" : "Checkout"}
        </button>
      )}
      <div className="w-full">
        {products && (
          <div>
            {products.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
