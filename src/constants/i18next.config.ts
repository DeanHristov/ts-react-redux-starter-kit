import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import { INITIAL_LOCAL_STORAGE } from './initialState';

import LOCALE_EN from '@locales/en';
import LOCALE_BG from '@locales/bg';

i18next
  .use(initReactI18next)
  .init({
  interpolation: {
    escapeValue: false
  },
  debug: __DEV__,
  nsSeparator: false,
  keySeparator: false,
  lng: INITIAL_LOCAL_STORAGE.locale,
  fallbackLng: INITIAL_LOCAL_STORAGE.locale,
  resources: {
    en: { translation: LOCALE_EN },
    bg: { translation: LOCALE_BG }
  }
});

export default i18next;
