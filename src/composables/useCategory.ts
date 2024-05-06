import type { ICategoryRequest, ICategoryResponse } from '@/models/category';
import { ref, onMounted, reactive } from 'vue';
import notificationHelper from '@/libraries/notificationHelper';
import categoryApis from '@/apis/category/categoryApi';
import type { FormInstance, FormRules } from 'element-plus';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import { normalValidate } from '@/libraries/elementPlusHelper/formValidationHelper';

export default function useCategory() {
  const dialogTableVisible = ref(false);
  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';
  const isLoading = ref(false);
  const isEditing = ref(false);
  const ruleFormRef = ref<FormInstance>();

  const categoryData = ref<ICategoryResponse[]>([]);

  const categoryRequestForm = ref<ICategoryRequest>({
    CategoryName: '',
    Image: '',
    Description: ''
  });
  const rules = reactive<FormRules<ICategoryRequest>>({
    CategoryName: normalValidate,
    Image: normalValidate,
    Description: normalValidate
  });

  async function getAllCategories() {
    isLoading.value = true;
    try {
      const response = await categoryApis.getAllCategories();
      categoryData.value = response.data.Data as ICategoryResponse[];
    } catch (error: any) {
      notificationHelper.error('error', `${error.message}`);
    } finally {
      isLoading.value = false;
    }
  }

  const createCategory = async () => {
    isLoading.value = true;
    const request: ICategoryRequest = {
      CategoryName: categoryRequestForm.value.CategoryName,
      Image: categoryRequestForm.value.Image,
      Description: categoryRequestForm.value.Description
    };
    try {
      const response = await categoryApis.createCategory(request);
      getAllCategories();
      notificationHelper.success('Success', response.data.Message);
    } catch (error: any) {
      notificationHelper.error('error', `${error.message}`);
    } finally {
      dialogFormVisible.value = false;
      isLoading.value = false;
    }
  };

  const onSubmit = formHelper.onSubmitForm(createCategory);

  // edit

  async function getCategoryById(Id: number) {
    try {
      const response = await categoryApis.getCategoryById(Id);
      const data: ICategoryResponse[] = response.data.Data as ICategoryResponse[];
      categoryRequestForm.value.CategoryName = data[0].CategoryName;
      categoryRequestForm.value.Description = data[0].Description;
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  }

  const requestId = ref(0);
  const onOpenEditForm = async (Id: number) => {
    requestId.value = Id;
    console.log(requestId.value);
    dialogFormVisible.value = true;
    isEditing.value = true;
    try {
      await getCategoryById(Id);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const onConfirmUpdate = async () => {
    isLoading.value = true;
    try {
      const response = await categoryApis.updateCategory(
        requestId.value,
        categoryRequestForm.value
      );
      console.log(response);
      getAllCategories();
      notificationHelper.success('success', response.data.Message);
    } catch (error) {
      console.error('Error updating category:', error);
    } finally {
      dialogFormVisible.value = false;
      isLoading.value = true;
    }
  };

  //
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  onMounted(() => {
    getAllCategories();
  });
  return {
    onSubmit,
    onConfirmUpdate,
    ruleFormRef,
    rules,
    dialogFormVisible,
    dialogTableVisible,
    formLabelWidth,
    categoryRequestForm,
    onCreateCategory: createCategory,
    onOpenEditForm,
    categoryData,
    isLoading,
    getAllCategories,
    isEditing,
    resetForm
  };
}
