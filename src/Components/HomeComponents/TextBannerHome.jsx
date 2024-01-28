import { useTranslation } from "react-i18next";
import Span from "./Span";
import BtnHome from "./BtnHome";

export default function TextBannerHome() {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-center mx-auto">
      <div>
        <p className="bg-red-500 bg-opacity-10 rounded-3xl flex justify-center items-center px-4 py-2 w-fit  ">
          <i
            className={`fa-regular fa-heart text-xl text-amber-300 bg-red-500 rounded-3xl px-1 
          ${i18n.language == "ar" ? "ml-2" : " mr-2"}`}
          ></i>
          {t("hmoe-Page.banner.header")}
        </p>
      </div>
      <div>
        <h1 className="text-5xl font-semibold text-start mb-16  md:text-6xl md:font-bold leading-normal">
          <p className="mb-4">
            <Span text={t("hmoe-Page.banner.h1.span-1") + " "} />
            <Span
              color="text-red-500"
              text={t("hmoe-Page.banner.h1.span-2") + " "}
            />
            <Span text={t("hmoe-Page.banner.h1.span-3") + " "} />
          </p>
          <p>
            <Span
              color="text-red-500"
              text={t("hmoe-Page.banner.h1.span-4") + " "}
            />
            <Span text={t("hmoe-Page.banner.h1.span-5") + " "} />
            <Span
              color="text-amber-300"
              text={t("hmoe-Page.banner.h1.span-6")}
            />
          </p>
        </h1>
      </div>
      <div className="text-start mx-auto opacity-80 text-xl font-normal font-['Sofia Pro'] md:text-2xl ">
        <p>{t("hmoe-Page.banner.p-1")}</p>
        <p>{t("hmoe-Page.banner.p-2")}</p>
      </div>
      <div className="m-6">
        <BtnHome />
      </div>
    </div>
  );
}
