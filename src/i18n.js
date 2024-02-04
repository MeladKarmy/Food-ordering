import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import arabicFile from "./assets/i18n/ar.json";
import englishFile from "./assets/i18n/en.json";
const resources = {
  en: {
    translation: englishFile,
  },
  ar: {
    translation: arabicFile,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
