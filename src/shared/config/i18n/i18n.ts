import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: import.meta.env.PROD,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{ling}}/{{ns}}.json'
        }
    });


export default i18n;