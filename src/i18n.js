import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en.json/';
import translationAR from './locales/ar.json';

// جلب لغة الجهاز
const userLang = navigator.language || navigator.userLanguage;
const defaultLang = userLang.startsWith('ar') ? 'ar' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      ar: { translation: translationAR },
    },
    lng: defaultLang,       // هذه السطر يحدد اللغة حسب جهاز المستخدم
    fallbackLng: 'en',     // لو ما وجدت ترجمة
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
