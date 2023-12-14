import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import globalEN from './app/locales/en/global.json'
import globalPL from './app/locales/pl/global.json'

const resources = {
  pl: {
    global: globalPL,
  },
  en: {
    global: globalEN,
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
