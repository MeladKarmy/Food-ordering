import React from "react";
import { useTranslation } from "react-i18next";
import headerImage from "../../assets/Food App/headerImage.png";
import headerSmallImage from "../../assets/Food App/Dishes4.png";
import headerimogy from "../../assets/Food App/emojy.png";
export default function Banner() {
  const { t, i18n } = useTranslation();
  let images = [
    headerSmallImage,
    headerSmallImage,
    headerSmallImage,
    headerSmallImage,
  ];

  return (
    <div className="mx-auto flex  items-center justify-center">
      <div className="flex items-center justify-center border-white border-[20px] rounded-full mx-auto">
        <div className="w-72 h-72 lg:w-96 lg:h-96 bg-red-500 rounded-full flex justify-center items-center relative ">
          <img
            loading="lazy"
            src={headerImage}
            alt="chef"
            className="w-72 h-80  lg:w-96 lg:h-96 object-contain rounded-full absolute bottom-0"
          />
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className={`absolute w-28 h-28 ${
                  index == 0
                    ? "-right-12 top-28 md:-right-12 md:top-36 lg:-right-16 lg:top-52"
                    : index == 1
                    ? "-left-12 top-28 md:-left-12 md:top-36 lg:-left-16 lg:top-52"
                    : index == 2
                    ? "left-4 top-56 md:left-6 md:top-60  lg:left-12 lg:top-80"
                    : "right-4 top-56 md:right-6 md:top-60 lg:right-12 lg:top-80"
                }`}
              >
                <img src={img} alt="Beautiful-Food" />
              </div>
            );
          })}
          <div className="absolute w-8 h-8 left-1/2 -translate-x-1/2 -top-16 md:-top-16  lg:-top-8">
            <img src={headerimogy} alt="imogy" />
          </div>
        </div>
      </div>
    </div>
  );
}
