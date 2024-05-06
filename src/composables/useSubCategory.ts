import subCategoryApis from '@/apis/subcategory/subCategoryApi';
import type { FormInstance, FormRules } from 'element-plus';
import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import { ref, onMounted, reactive } from 'vue';
import notificationHelper from '@/libraries/notificationHelper';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import {
  normalValidate,
  verifyIntegerMinMax
} from '@/libraries/elementPlusHelper/formValidationHelper';

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
    CategoryId: normalValidate,
    SubCategoryName: normalValidate,
    Description: normalValidate
  });

  const getAllSubCategories = async () => {
    const response = await subCategoryApis.getAllSubCategories();
    subCategoryData.value = response.data.Data as ISubCategoryDataResponse[];
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
