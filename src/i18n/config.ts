export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];

// French is the source language; English is awaiting a human translation.
export const defaultLocale: Locale = 'fr';
