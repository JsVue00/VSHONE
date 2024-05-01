import en from '@/locales/en.json';
import kh from '@/locales/kh.json';
import { createI18n } from 'vue-i18n';
import { appStore } from '@/stores';
const store = appStore();

const i18n = createI18n({
  locale: store.locale,
  messages: {
    en: en,
    kh: kh
  }
});
export default i18n;
export const { t } = i18n.global;
