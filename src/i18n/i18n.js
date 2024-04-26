import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../../public/locales/en";
import deTranslation from "../../public/locales/de";
import trTranslation from "../../public/locales/tr";

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

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;