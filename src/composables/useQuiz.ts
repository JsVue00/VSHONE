import { computed, reactive, ref, onMounted } from 'vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { ElNotification } from 'element-plus';
import { t } from '@/libraries/vue-i18n';
import type { ICreateQuizRequest, IGetQuizResponse, Option } from '@/models/quiz';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import notificationHelper from '@/libraries/notificationHelper';
import quizApi from '@/apis/quiz/quizApi';
import { appStore } from '@/stores';
import { normalValidate } from '@/libraries/elementPlusHelper/formValidationHelper';
import useSubCategory from './useSubCategory';
import type { ISubCategoryDataResponse } from '@/models/subCategory';
import useCategory from '@/composables/useCategory';
import router from '@/router';
import type { TableProperty } from '@/models/tableProperty';

export default function useCreateQuiz() {
  const ruleFormRef = ref<FormInstance>();
  const store = appStore();
  const { subCategoryData } = useSubCategory();
  const { categoryData } = useCategory();

  const quizData = ref<IGetQuizResponse[]>([]);
  const isLoading = ref<boolean>;

  const tableProperties: TableProperty = [
    ['CategoryName', 'category_name'],
    ['SubCategoryName', 'sub_category_name'],
    ['Question', 'question'],
    ['Options', 'options'],
    ['CreatedAt', 'created_at'],
    ['CorrectAnswer', 'correct_answer']
  ];

  async function getAllQuizzes() {
    const response = await quizApi.getAllQuizzes();
    quizData.value = response.data.Data as IGetQuizResponse[];
    const data = response.data.Data as IGetQuizResponse[];
    store.quizList = data;
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

  const rules = ref<FormRules<ICreateQuizRequest>>({
    CategoryId: normalValidate,
    Title: normalValidate,
    Question: normalValidate,
    CorrectAnswer: normalValidate,
    SubCategoryId: normalValidate
  });

  const createNewQuiz = async () => {
    const optionsValue = optionsField.value
      .filter((options) => options.value !== '')
      .map((options) => options.value);
    requestForm.Options = optionsValue;
    const request: ICreateQuizRequest = {
      SubCategoryId: requestForm.SubCategoryId,
      CategoryId: requestForm.CategoryId,
      GameName: 'Quiz',
      Title: requestForm.Title,
      Question: requestForm.Question,
      Options: `${JSON.stringify(requestForm.Options)}`,
      CorrectAnswer: requestForm.CorrectAnswer
    };
    try {
      const reponse = await quizApi.createQuiz(request);
      notificationHelper.success('Success', reponse.data.Message);
      getAllQuizzes();
    } catch (error: any) {
      notificationHelper.error('Error', `${error.message}`);
      throw error;
    }
  };
  const onEditButton = async (Id: number) => {
    router.push({ name: 'update-quiz', params: { id: Id } });
  };

  const onUpdate = formHelper.onSubmitForm(() => {});
  const onSubmit = formHelper.onSubmitForm(createNewQuiz);

  // filter sub categories
  const SubCategory = computed(() => {
    return subCategoryData.value.filter(
      (data: ISubCategoryDataResponse) => data.CategoryId === requestForm.CategoryId
    );
  });

  onMounted(() => {
    getAllQuizzes();
  });

  return {
    tableProperties,
    getAllQuizzes,
    quizData,
    optionsField,
    handleAddOption,
    handleDeleteOption,
    allAnswers,
    requestForm,
    ruleFormRef,
    rules,
    onSubmit,
    SubCategory,
    categoryData,
    onEditButton,
    isLoading,
    onUpdate
  };
}
