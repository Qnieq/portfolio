const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => {
  const loadDictionary = dictionaries[locale as keyof typeof dictionaries];
  if (!loadDictionary) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return loadDictionary();
};