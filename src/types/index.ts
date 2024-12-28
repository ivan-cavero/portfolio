export interface LayoutProps {
  title: string;
  description?: string;
}

export interface TranslationKey {
  [key: string]: string;
}

export interface Translations {
  [locale: string]: TranslationKey;
}

