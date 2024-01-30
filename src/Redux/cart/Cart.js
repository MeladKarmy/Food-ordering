import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../i18n";
import { toast } from "react-toastify";

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
          ? toast.warning("! هذا المنتج موجود في عربة التسوق")
          : toast.warning("This Product Found In Cart !");
      } else {
        i18n.language == "ar"
          ? toast.success("تم اضافه منتج")
          : toast.success("This Product Added To Cart");
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
      toast.error("Remove item From Cart !");
      return {
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    },
    clearCart: (state) => {
      toast.success("Cart Is Empty Now !");

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
