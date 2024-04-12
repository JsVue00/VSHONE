import { defineStore } from 'pinia';

export const appStore = defineStore('appStore', {
  state: () => {
    return {
      locale: 'kh',
      isShowSidebar: true
    };
  },
  actions: {
    changeLanguage() {
      this.locale === 'kh' ? (this.locale = 'en') : (this.locale = 'kh');
    },
    toggleSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    }
  },
  persist: true
});
