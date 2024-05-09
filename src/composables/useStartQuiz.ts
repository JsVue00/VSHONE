import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IGetQuizResponse } from '@/models/quiz';
import { appStore } from '@/stores';
import notificationHelper from '@/libraries/notificationHelper';
import { t } from '@/libraries/vue-i18n';
import useQuiz from '@/composables/useQuiz';

export default function useStartQuiz() {
  const route = useRoute();
  const router = useRouter();
  const answer = ref<number | null>();
  const isSelected = ref<boolean>(true);
  const myQuestion = ref<IGetQuizResponse[]>([]);
  const pageId = ref<number>(0);
  const quizTypes = ref<IGetQuizResponse>();
  const isWon = ref<boolean>(false);
  const disabledRoute = ref<boolean>(false);
  const store = appStore();
  const { quizData } = useQuiz();
  const quizList = store.quizList;

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
    router.push({
      name: 'welcome',
      params: { id: pageId.value, type: quizTypes.value?.SubCategoryName }
    });
    answer.value = null;
  };

  const onStartQuiz = (type: string, SubCatId: number) => {
    store.quizList = quizData.value.filter(
      (data: IGetQuizResponse) => data.SubCategoryId === SubCatId
    );
    if (!store.quizList.length) {
      notificationHelper.warning('', 'No quiz data found');
    } else {
      router.push({ name: 'welcome', params: { id: 1, type: type } });
    }
  };

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
      quizTypes.value = quizList.find(
        (item: IGetQuizResponse, index) => index == Number(newId) - 1
      );
    }
  );

  return {
    onStartQuiz,
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
