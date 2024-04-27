import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en";
import deTranslation from "../locales/de";
import trTranslation from "../locales/tr";

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  tr: {
    translation: trTranslation,
  },
};

const lng = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(initReactI18next)
  .init({
    lng,
    resources,
  })
  .then(() => {
    localStorage.setItem("i18nextLng", i18n.language);
  });

export default i18n;
