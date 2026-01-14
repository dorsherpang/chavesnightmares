// i18n.config.ts 或类似文件
export const locales = ['en', 'zh', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';



