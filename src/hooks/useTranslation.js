import { useLanguage } from '../contexts/LanguageContext';
import enTranslations from '../locales/en.json';
import zhTranslations from '../locales/zh.json';

const translations = {
  en: enTranslations,
  zh: zhTranslations
};

function getValue(lang, keyPath) {
  const keys = keyPath.split('.');
  let value = translations[lang];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }

  return value;
}

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key, variables = {}) => {
    let value = getValue(language, key);

    if (value === undefined && language !== 'en') {
      value = getValue('en', key);
    }

    if (value === undefined) {
      return key;
    }

    if (typeof value === 'string') {
      return Object.entries(variables).reduce((acc, [placeholder, replacement]) => {
        const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
        return acc.replace(regex, replacement);
      }, value);
    }

    return value;
  };

  return { t, language };
}
