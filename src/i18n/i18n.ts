import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import zh from "./locales/zh.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";
import fr from "./locales/fr.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      ar: { translation: ar },
      zh: { translation: zh },
      ko: { translation: ko },
      ja: { translation: ja },
      fr: { translation: fr },
    },
    lng: "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;
