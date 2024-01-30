import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function BtnHome() {
  const { t, i18n } = useTranslation();
  const navigateTo = useNavigate();

  return (
    <button
      onClick={() => navigateTo("menu")}
      className=" items-center mx-auto text-4xl text-red-500 opacity-80 hover:opacity-100 font-bold my-8"
    >
      {t("base-button.explore-menu")}
    </button>
  );
}
