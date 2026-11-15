import { createContext, useContext } from 'react';

export type Locale = 'es' | 'en';

export const LOCALES: Locale[] = ['es'];

/** The site is Spanish-only; locale is always `es`. */
export const localeFromPath = (_pathname: string): Locale => 'es';

const LocaleContext = createContext<Locale>('es');

export const LocaleProvider = LocaleContext.Provider;

export const useLocale = (): Locale => useContext(LocaleContext);
