import I18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from '../assets/i18n/en.json'
import es from '../assets/i18n/es.json'

const locales = RNLocalize.getLocales()

export const currentLocale = locales[0]
export const locale = currentLocale.languageTag
export const actualLanguage = currentLocale.languageCode
export const actualCountry = currentLocale.countryCode

I18n.locale = locale
I18n.fallbacks = true
I18n.translations = { en, es }

const translate = (text: string, params: any = { type: '', kind: '' }) => I18n.t(text, params)

translate.locale = I18n.locale

export default translate
