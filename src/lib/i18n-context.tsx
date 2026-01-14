'use client';

import React, { createContext, useContext } from 'react';
import { Locale } from './i18n';

interface Messages {
    [key: string]: any;
}

interface I18nContextType {
    locale: Locale;
    messages: Messages;
    t: (key: string) => string | any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({
    children,
    locale,
    messages,
}: {
    children: React.ReactNode;
    locale: Locale;
    messages: Messages;
}) {
    const t = (key: string): any => {
        const keys = key.split('.');
        let value: any = messages;
        for (const k of keys) {
            value = value?.[k];
        }
        return value !== undefined ? value : key;
    };

    return (
        <I18nContext.Provider value={{ locale, messages, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}