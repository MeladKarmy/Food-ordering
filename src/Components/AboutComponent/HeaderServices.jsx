import React from "react";
import Span from "../HomeComponents/Span";
import { useTranslation } from "react-i18next";

export default function HeaderServices({ text1, text2, para }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <h3 className="text-3xl font-semibold text-center mb-16  md:text-6xl md:font-bold leading-normal">
        <p className="mb-4">
          {text1?.map((tex, index) => (
            <Span key={index} text={tex.word} color={tex?.color} />
          ))}
        </p>
        <p>
          {text2?.map((tex, index) => (
            <Span key={index} text={tex.word} color={tex?.color} />
          ))}
        </p>
      </h3>
      <p className="w-2/3 mb-16 mx-auto">{para} </p>
    </div>
  );
}
