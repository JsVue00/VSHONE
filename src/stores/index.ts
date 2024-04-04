import { defineStore } from 'pinia';

export const appStore = defineStore('appStore', {
  state: () => {
    return {
      locale: 'kh'
    };
  },
  actions: {
    changeLanguage() {
      this.locale === 'kh' ? (this.locale = 'en') : (this.locale = 'kh');
    }
  },
  persist: true
});
