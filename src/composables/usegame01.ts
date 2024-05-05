import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IGetQuizResponse } from '@/models/quiz';
import { appStore } from '@/stores';
import notificationHelper from '@/libraries/notificationHelper';
import { t } from '@/libraries/vue-i18n';

export default function useGame01() {
  const route = useRoute();
  const router = useRouter();
  const answer = ref<number | null>();
  const isSelected = ref<boolean>(true);
  const myQuestion = ref<IGetQuizResponse[]>([]);
  const pageId = ref<number>(0);
  const isWon = ref<boolean>(false);
  const disabledRoute = ref<boolean>(false);
  const store = appStore();

  const onSubmit = async (correctAnswer: number) => {
    if (correctAnswer === answer.value) {
      isWon.value = true;
      notificationHelper.success(`${t('correct')}`, `${t('congratulation')} 💕`);
    } else {
      notificationHelper.warning(`${t('wrong')}`, `${t('please_select_another_answer')}`);
    }
  };
  const onNextGame = () => {
    pageId.value += 1;
    router.push('/games/' + pageId.value);
    answer.value = null;
  };

  const quizList = store.quizList;
  onMounted(() => {
    pageId.value = Number(route.params.id);
    myQuestion.value = quizList.filter(
      (item: IGetQuizResponse, index) => index === Number(pageId.value - 1)
    );
    pageId.value < quizList.length ? (disabledRoute.value = false) : (disabledRoute.value = true);
  });

  watch(
    () => route.params.id,
    (newId) => {
      pageId.value = Number(newId);
      myQuestion.value = quizList.filter(
        (item: IGetQuizResponse, index) => index === Number(newId) - 1
      );
      pageId.value < quizList.length ? (disabledRoute.value = false) : (disabledRoute.value = true);
      console.log(disabledRoute.value, pageId.value, quizList.length);
    }
  );

  return {
    myQuestion,
    answer,
    isWon,
    isSelected,
    pageId,
    disabledRoute,
    onSubmit,
    onNextGame
  };
}
