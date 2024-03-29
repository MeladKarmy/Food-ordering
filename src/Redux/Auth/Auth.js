import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

let data = JSON.parse(localStorage.getItem("token")) || null;
const initialState = {
  token: {
    token: data?.token || null,
    userNameAr: data?.userNameAr || null,
    userNameEn: data?.userNameEn || null,
    role: data?.role || null,
    userId: data?.userId || null,
  },
};
export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token.token = action.payload;
      let user = jwtDecode(action.payload);
      state.token.userNameAr = user.nameAr;
      state.token.userNameEn = user.nameEn;
      state.token.role = user.role;
      state.token.userId = user.userId;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logout: (state, action) => {
      state.token.token = null;
      state.token.userNameAr = null;
      state.token.userNameEn = null;
      state.token.role = null;
      state.token.userId = null;
      localStorage.clear("token");
      toast.success("LogOut Success");
    },
  },
});

export const Auth = (state) => state.Auth;
export const { saveToken, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
