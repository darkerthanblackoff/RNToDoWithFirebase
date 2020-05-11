declare module 'i18next-react-native-language-detector' {
  import { i18n } from 'i18next';
  interface IContent {
    init: (i18next: i18n) => void;
    type: 'languageDetector';
    detect: () => string;
    chacheUserLanguage: () => void;
  }
  const content: IContent;
  export default content;
}
