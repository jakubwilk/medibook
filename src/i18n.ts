import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import globalEN from './app/locales/en/global.json'
import homeEN from './app/locales/en/home.json'
import verifyEN from './app/locales/en/verify.json'
import globalPL from './app/locales/pl/global.json'
import homePL from './app/locales/pl/home.json'
import verifyPL from './app/locales/pl/verify.json'

const resources = {
  pl: {
    global: globalPL,
    home: homePL,
    verify: verifyPL,
  },
  en: {
    global: globalEN,
    home: homeEN,
    verify: verifyEN,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
