import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    defaultLanguage: "en",
    lng: ["en", "vi"],
    strictMode: false,
    preload: ["en"],
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
      wait: true
    }
  });

export default i18n;
