import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const supportedLanguage = ['en']

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: [
        'localStorage',
        'navigator',
        'querystring',
        'cookie',
        'sessionStorage',
        'htmlTag',
      ],
      caches: ['localStorage', 'cookie'],
    },
    supportedLngs: supportedLanguage,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  })

export default i18n
