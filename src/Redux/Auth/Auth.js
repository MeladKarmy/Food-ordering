import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

let data = JSON.parse(localStorage.getItem("token")) || null;
const initialState = {
  token: {
    token: data?.token || null,
    userNameAr: data?.userNameAr || null,
    userNameEn: data?.userNameEn || null,
    role: data?.role || null,
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
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
    },
  },
});

export const Auth = (state) => state.Auth;
export const { saveToken, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
