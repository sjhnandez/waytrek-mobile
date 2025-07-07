import { useLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import es from "./translations/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

const initI18n = async () => {
  const locales = useLocales();
  const lng = locales[0].languageCode?.split("-")[0];

  i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
