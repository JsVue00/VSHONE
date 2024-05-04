import { computed, reactive, ref, onMounted } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { ElNotification } from 'element-plus';
import { t } from '@/libraries/vue-i18n';
import type { ICreateQuizRequest, IGetQuizResponse, Option } from '@/models/quiz';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import notificationHelper from '@/libraries/notificationHelper';
import quizApi from '@/apis/quiz/quizApi';
import { appStore } from '@/stores';

export default function useCreateQuiz() {
  const formSize = ref<ComponentSize>('default');
  const ruleFormRef = ref<FormInstance>();
  const store = appStore();

  const quizData = ref<IGetQuizResponse[]>([]);

  async function getAllQuizzes() {
    const response = await quizApi.getAllQuizzes();
    quizData.value = response.data.Data as IGetQuizResponse[];
    const data = response.data.Data as IGetQuizResponse[];
    store.quizList = data;
    console.log(store.quizList);
  }

  const optionsField = ref<Option[]>([
    { model: 'answer1', value: '' },
    { model: 'answer2', value: '' }
  ]);
  const requestForm = reactive<ICreateQuizRequest>({
    SubCategoryId: null,
    CategoryId: null,
    Title: '',
    GameName: '',
    Question: '',
    Image: '',
    Options: '',
    CorrectAnswer: null
  });
  const handleAddOption = () => {
    if (optionsField.value.length < 6) {
      optionsField.value.push({ model: '', value: '' });
    } else {
      return ElNotification({
        message: `${t('the_maximum_of_answer_is')} ` + 6,
        type: 'warning'
      });
    }
  };
  const handleDeleteOption = (index: number) => {
    optionsField.value.splice(index, 1);
    console.log(optionsField.value);
  };

  const allAnswers = computed(
    () => optionsField.value.filter((option: Option) => option.value !== '').length
  );

  const rules = reactive<FormRules<ICreateQuizRequest>>({
    CategoryId: { required: true },
    Title: { required: true },
    Question: { required: true },
    Options: { required: true },
    CorrectAnswer: { required: true }
  });

  const createNewQuiz = async () => {
    const optionsValue = optionsField.value
      .filter((options) => options.value !== '')
      .map((options) => options.value);
    requestForm.Options = optionsValue;
    console.log(Object.values(requestForm.Options));
    const request: ICreateQuizRequest = {
      SubCategoryId: 1,
      CategoryId: requestForm.CategoryId,
      GameName: 'Quiz',
      Title: requestForm.Title,
      Question: requestForm.Question,
      Options: `${JSON.stringify(requestForm.Options)}`,
      CorrectAnswer: requestForm.CorrectAnswer
    };
    try {
      const reponse = await quizApi.createQuiz(request);
      notificationHelper.success('Success', reponse.data);
    } catch (error: any) {
      notificationHelper.error('Error', `${error.message}`);
      throw error;
    }
  };

  const onSubmit = formHelper.onSubmitForm(createNewQuiz);

  onMounted(() => {
    getAllQuizzes();
  });

  return {
    getAllQuizzes,
    quizData,
    optionsField,
    handleAddOption,
    handleDeleteOption,
    allAnswers,
    formSize,
    requestForm,
    ruleFormRef,
    rules,
    onSubmit
  };
}
