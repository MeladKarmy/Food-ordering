import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BtnHome() {
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();

  return (
    // <button className="flex justify-between items-center mx-auto text-4xl opacity-80 hover:opacity-100 font-semibold my-8">
    //   <i
    //     className={`fa-solid fa-play text-red-500  rounded-full shadow-2xl ${
    //       i18n.language == "ar" ? "mr-6 order-2" : "mr-6"
    //     }`}
    //   ></i>
    //   {t("base-button.explore-menu")}
    // </button>
    <button
      onClick={() => navigateTo("menu")}
      className=" items-center mx-auto text-4xl text-red-500 opacity-80 hover:opacity-100 font-bold my-8"
    >
      {t("base-button.explore-menu")}
    </button>
  );
}
