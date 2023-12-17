import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import globalEN from './app/locales/en/global.json'
import homeEN from './app/locales/en/home.json'
import globalPL from './app/locales/pl/global.json'
import homePL from './app/locales/pl/home.json'

const resources = {
  pl: {
    global: globalPL,
    home: homePL,
  },
  en: {
    global: globalEN,
    home: homeEN,
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
