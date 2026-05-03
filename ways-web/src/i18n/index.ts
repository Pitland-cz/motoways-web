import cs from './cs';
import en from './en';
import type { T } from './cs';

export type Locale = 'cs' | 'en';
export type { T };

const translations: Record<Locale, T> = { cs, en };

export function t(locale: Locale | string | undefined): T {
  return translations[(locale as Locale) ?? 'cs'] ?? translations.cs;
}
