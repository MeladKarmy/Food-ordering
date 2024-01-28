import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import i18n from "../../i18n";

const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (product) {
        i18n.language == "ar"
          ? Swal.fire("! هذا المنتج موجود في عربة التسوق")
          : Swal.fire("This Product Found In Cart !");
      } else {
        i18n.language == "ar"
          ? Swal.fire("تم اضافه منتج")
          : Swal.fire("This Product Added To Cart");
      }
      return {
        products: product
          ? state.products
          : [
              ...state.products,
              {
                ...action.payload,
                amount: 1,
              },
            ],
      };
    },
    removeFromCart: (state, action) => {
      return {
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    },
    clearCart: (state) => {
      return { products: [] };
    },
    increment: (state, action) => {
      return {
        products: state.products.map((product) =>
          product._id === action.payload._id &&
          product.currentSize == action.payload.currentSize &&
          product.toppings == action.payload.toppings
            ? {
                ...product,
                amount: product.amount + 1,
              }
            : product
        ),
      };
    },
    decrement: (state, action) => {
      return {
        products: state.products.map((product) =>
          product._id === action.payload._id &&
          product.currentSize == action.payload.currentSize &&
          product.toppings == action.payload.toppings
            ? {
                ...product,
                amount: product.amount - 1,
              }
            : product
        ),
      };
    },
  },
});

export const cartProducts = (state) => state.cart.products;
export const { addToCart, removeFromCart, clearCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
