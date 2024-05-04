import subCategoryApis from '@/apis/subcategory/subCategoryApi';
import type { FormInstance, FormRules } from 'element-plus';
import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import { ref, onMounted, reactive } from 'vue';
import notificationHelper from '@/libraries/notificationHelper';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
export default function useSubCategory() {
  const dialogTableVisible = ref(false);
  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';
  const isLoading = ref(false);
  const isEditing = ref(false);
  const ruleFormRef = ref<FormInstance>();
  const subCategoryData = ref<ISubCategoryDataResponse[]>([]);

  const subCategoryRequestForm = reactive<ISubCategoryRequest>({
    CategoryId: null,
    Image: '',
    SubCategoryName: '',
    Description: ''
  });

  const rules = reactive<FormRules<ISubCategoryRequest>>({
    CategoryId: { required: true, message: 'required' },
    SubCategoryName: { required: true, message: 'required' },
    Description: { required: true, message: 'required' }
  });

  const getAllSubCategories = async () => {
    const response = await subCategoryApis.getAllCategories();
    subCategoryData.value = response;
  };

  const createSubCategory = async () => {
    isLoading.value = true;
    try {
      const response = await subCategoryApis.createNewSubCategory(subCategoryRequestForm);
      await getAllSubCategories();
      notificationHelper.success('succcess', response.Message);
    } catch (error: any) {
      throw new Error(`${error.message}`);
    } finally {
      isLoading.value = false;
      dialogFormVisible.value = false;
    }
  };
  const onSubmit = formHelper.onSubmitForm(createSubCategory);
  const onConfirmUpdate = () => {};

  onMounted(() => {
    getAllSubCategories();
  });

  return {
    subCategoryData,
    dialogFormVisible,
    dialogTableVisible,
    formLabelWidth,
    isEditing,
    isLoading,
    ruleFormRef,
    subCategoryRequestForm,
    rules,
    onSubmit,
    onConfirmUpdate
  };
}