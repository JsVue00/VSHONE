import categoryApis from '@/apis/category/categoryApi';
import type { IGetQuizResponse } from '@/models/quiz';
import { defineStore } from 'pinia';

export const appStore = defineStore('appStore', {
  state: () => {
    return {
      locale: 'en',
      isShowSidebar: true,
      quizList: [] as IGetQuizResponse[]
    };
  },
  actions: {
    changeLanguage() {
      this.locale === 'kh' ? (this.locale = 'en') : (this.locale = 'kh');
    },
    onChangeLanguage(lang: string) {
      this.locale = lang;
    },
    toggleSidebar() {
      this.isShowSidebar = !this.isShowSidebar;
    }
  },
  persist: [
    {
      storage: sessionStorage,
      paths: ['isShowSidebar', 'quizList']
    },
    {
      storage: localStorage,
      paths: ['locale']
    }
  ]
});
