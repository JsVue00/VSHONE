import { appStore } from '@/stores';
import { ref, onMounted, computed } from 'vue';
import { dateTimeConverter } from '@/libraries/utils/converter';
interface ILanguage {
  name: string;
  label: string;
  icon: string;
}

export default function useHeader() {
  const store = appStore();
  const dateTime = ref();
  onMounted(() => {
    setInterval(() => {
      return (dateTime.value = dateTimeConverter(new Date().toString()));
    }, 100);
  });
  const handleSidebar = () => {
    return store.toggleSidebar();
  };
  const languages: ILanguage[] = [
    { name: 'en', label: 'English', icon: 'https://cdn-icons-png.flaticon.com/128/555/555417.png' },
    {
      name: 'kh',
      label: 'khmer',
      icon: 'https://cdn-icons-png.flaticon.com/128/14009/14009894.png'
    }
  ];
  const handleClick = (lang: string) => {
    store.onChangeLanguage(lang);
    window.location.reload();
  };

  const language = computed(() => {
    return languages.find((langs: ILanguage) => langs.name === store.locale);
  });

  return {
    handleClick,
    language,
    dateTime,
    languages,
    handleSidebar,
    store
  };
}
