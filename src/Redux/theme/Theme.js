import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        document.body.classList.add("dark");
        toast.dark("Dark Mode Theme");
      } else {
        state.theme = "light";
        document.body.classList.remove("dark");
        toast.dark("Light Mode Theme");
      }
    },
  },
});

export const currentThemeMode = (state) => state.themes.theme;
export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
