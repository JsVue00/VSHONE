import type { ICategoryRequest, ICategoryResponse } from '@/models/category';
import { ref, onMounted, reactive } from 'vue';
import notificationHelper from '@/libraries/notificationHelper';
import APIs from '@/apis/category/adminApis';
import type { FormInstance, FormRules } from 'element-plus';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import MessageBox from '@/libraries/elementPlusHelper/messageBox';

export default function useCategory() {
  const dialogTableVisible = ref(false);
  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';
  const isLoading = ref(false);
  const ruleFormRef = ref<FormInstance>();

  const categoryData = ref<ICategoryResponse[]>([]);

  const categoryRequestForm = ref<ICategoryRequest>({
    CategoryName: '',
    Image: '',
    Description: ''
  });
  const rules = reactive<FormRules<ICategoryRequest>>({
    CategoryName: { required: true },
    Image: { required: true },
    Description: { required: true }
  });

  async function getAllCategories() {
    isLoading.value = true;
    try {
      const response = await APIs.getAllCategories();
      categoryData.value = response.data;
    } catch (error: any) {
      notificationHelper.error('error', `${error.message}`);
    } finally {
      isLoading.value = false;
    }
  }

  const createCategory = async () => {
    isLoading.value = true;
    try {
      const request: ICategoryRequest = {
        CategoryName: categoryRequestForm.value.CategoryName,
        Image: categoryRequestForm.value.Image,
        Description: categoryRequestForm.value.Description
      };
      const response = await APIs.createCategory(request);
      getAllCategories();
      notificationHelper.success('Success', response.data);
    } catch (error: any) {
      notificationHelper.error('error', `${error.message}`);
    } finally {
      dialogFormVisible.value = false;
      isLoading.value = false;
    }
  };
  const deleteCategory = async (Id: number) => {
    try {
      await APIs.deleteCategory(Id);
      notificationHelper.success('Success', 'Delete category successfully');
      getAllCategories();
    } catch (error) {
      notificationHelper.error('Error', 'Error');
    }
  };
  const onConfirm = (Id: number) => {
    MessageBox.onConfirm(async () => deleteCategory(Id), 'Do you want to delete?');
  };

  const onSubmit = formHelper.onSubmitForm(createCategory);

  onMounted(() => {
    getAllCategories();
  });
  return {
    onSubmit,
    ruleFormRef,
    rules,
    dialogFormVisible,
    dialogTableVisible,
    formLabelWidth,
    categoryRequestForm,
    onCreateCategory: createCategory,
    onConfirm,
    categoryData,
    isLoading,
    getAllCategories
  };
}
