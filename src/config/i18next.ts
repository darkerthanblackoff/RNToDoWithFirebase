import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguages } from 'react-native-i18n';
import AsyncStorage from '@react-native-community/async-storage';

import { logi } from '../utils';

import ru from './locales/ru.json';
import en from './locales/en.json';

const LOCALE_STORAGE_KEY = '@APP:languageCode';

export function findUserLang() {
  getLanguages().then((languages) => {
    AsyncStorage.setItem(LOCALE_STORAGE_KEY, languages[0].split('-')[0]);
    logi('Found user lang: ' + languages[0].split('-')[0]);
  });
}

findUserLang();

const languageDetector: LanguageDetectorAsyncModule = {
  init: () => {},
  type: 'languageDetector',
  async: true,
  detect: async (callback: (lng: string) => void) => {
    const lng = await AsyncStorage.getItem(LOCALE_STORAGE_KEY);
    const selectLanguage = lng || 'en';
    logi(`Switch app locale to: ${selectLanguage}`);
    callback(selectLanguage);
  },
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'screens',
    fallbackLng: 'en',
    resources: { ru, en },
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
  });

export default i18next;
