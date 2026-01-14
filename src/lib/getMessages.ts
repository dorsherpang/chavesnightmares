import en from '@/messages/en.json';
import zh from '@/messages/zh.json';
import es from '@/messages/es.json';
import pt from '@/messages/pt.json';
import { Locale } from './i18n';

const messagesMap: Record<Locale, any> = { en, zh, es, pt };

export function getMessages(locale: Locale) {
    return messagesMap[locale] ?? messagesMap['en'];
}
