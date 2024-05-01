import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type Game01 } from '@/models/game01';
export default function useGame01() {
  const route = useRoute();
  const router = useRouter();
  const answer = ref<number | null>();
  const isSelected = ref<boolean>(true);
  const myQuestion = ref<Game01[]>([]);
  const pageId = ref<number>(0);
  const isWon = ref<boolean>(false);
  const disabledRoute = ref<boolean>(false);

  const data: Array<Game01> = [
    {
      id: 1,
      category: 'code',
      subCategory: 'javascript',
      qa: 'what is array in javscript?',
      image:
        'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9mZW1hbGVfbWluaW1hbF9yb2JvdF9mYWNlX29uX2RhcmtfYmFja2dyb3VuZF81ZDM3YjhlNy04MjRkLTQ0NWUtYjZjYy1hZmJkMDI3ZTE1NmYucG5n.png',
      options: ['a', 'b', 'c', 'd'],
      correctAnswer: 1,
      isChecked: false
    },
    {
      id: 2,
      qa: 'What is Node js?',
      image:
        'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9mZW1hbGVfbWluaW1hbF9yb2JvdF9mYWNlX29uX2RhcmtfYmFja2dyb3VuZF81ZDM3YjhlNy04MjRkLTQ0NWUtYjZjYy1hZmJkMDI3ZTE1NmYucG5n.png',
      options: ['Is javascript library', 'Is a javscript framework', 'is boths'],
      correctAnswer: 1,
      isChecked: false
    },
    {
      id: 3,
      qa: 'តើប្រទេសកម្ពុជាមានប៉ុន្មានខេត្ត​ ក្រុង?',
      image: '',
      options: ['២៤ ខេត្ត និងក្រុង ១', '២៥ ខេត្ត', '២៤ ខេត្ត', 'មិនមានចម្លើយ ត្រឹមត្រូវ'],
      correctAnswer: 1,
      isChecked: false
    }
  ];
  const onPlayerSelected = async (correctAnswer: number) => {
    if (correctAnswer === answer.value) {
      isWon.value = true;
      setTimeout(() => {
        isWon.value = false;
      }, 3000);
    } else {
      alert('Please try again');
    }
  };
  const changeGame = () => {
    pageId.value += 1;
    router.push('/games/' + pageId.value);
    answer.value = null;
  };

  onMounted(() => {
    pageId.value = Number(route.params.id);
    myQuestion.value = data.filter((item: Game01) => item.id === Number(pageId.value));
    pageId.value < data.length ? (disabledRoute.value = false) : (disabledRoute.value = true);
  });
  watch(
    () => route.params.id,
    (newId, oldId) => {
      pageId.value = Number(newId);
      myQuestion.value = data.filter((item) => item.id === Number(newId));
      pageId.value < data.length ? (disabledRoute.value = false) : (disabledRoute.value = true);
      console.log(disabledRoute.value, pageId.value, data.length);
    }
  );

  return {
    answer,
    isWon,
    isSelected,
    myQuestion,
    pageId,
    disabledRoute,
    onPlayerSelected,
    changeGame
  };
}
