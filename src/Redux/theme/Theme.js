import { createSlice } from "@reduxjs/toolkit";

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
      } else {
        state.theme = "light";
        document.body.classList.remove("dark");
      }
    },
  },
});

export const currentThemeMode = (state) => state.themes.theme;
export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
