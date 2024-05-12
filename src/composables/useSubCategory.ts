import subCategoryApis from '@/apis/subcategory/subCategoryApi';
import type { FormInstance, FormRules } from 'element-plus';
import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import { ref, onMounted, reactive } from 'vue';
import notificationHelper from '@/libraries/notificationHelper';
import formHelper from '@/libraries/elementPlusHelper/formHelper';
import { normalValidate } from '@/libraries/elementPlusHelper/formValidationHelper';

export default function useSubCategory() {
  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';
  const isLoading = ref(false);
  const isEditing = ref(false);
  const ruleFormRef = ref<FormInstance>();
  const subCategoryData = ref<ISubCategoryDataResponse[]>([]);
  const subCategoryId = ref<number>(0);
  const confirmDialogVisible = ref<boolean>(false);

  const subCategoryRequestForm = reactive<ISubCategoryRequest>({
    CategoryId: null,
    Image: '',
    SubCategoryName: '',
    Description: ''
  });

  const rules = reactive<FormRules<ISubCategoryRequest>>({
    CategoryId: normalValidate,
    SubCategoryName: normalValidate
  });

  const getAllSubCategories = async () => {
    try {
      const response = await subCategoryApis.getAllSubCategories();
      subCategoryData.value = response.data.Data as ISubCategoryDataResponse[];
    } catch (error: any) {
      notificationHelper.error('', `${error.message}`);
    }
  };

  const createSubCategory = async () => {
    try {
      isLoading.value = true;
      const response = await subCategoryApis.createNewSubCategory(subCategoryRequestForm);
      await getAllSubCategories();
      notificationHelper.success('succcess', response.data.Message);
    } catch (error: any) {
      throw new Error(`${error.message}`);
    } finally {
      isLoading.value = false;
      dialogFormVisible.value = false;
    }
  };
  const onClickEdit = (Id: number) => {
    subCategoryId.value = Id;
    isEditing.value = true;
    const data = subCategoryData.value.find((data: ISubCategoryDataResponse) => data.Id === Id);
    if (data) {
      subCategoryRequestForm.SubCategoryName = data.SubCategoryName;
      subCategoryRequestForm.CategoryId = data.CategoryId;
      subCategoryRequestForm.Description = data.Description;
    }
    dialogFormVisible.value = true;
  };
  const onConfirmEdit = formHelper.onSubmitForm(async () => {
    try {
      const response = await subCategoryApis.updateSubCategory(
        subCategoryId.value,
        subCategoryRequestForm
      );
      notificationHelper.success('', response.data.Message);
      getAllSubCategories();
    } catch (error) {
      console.log(error);
    } finally {
      dialogFormVisible.value = false;
      isLoading.value = false;
    }
  });

  const confirmDialog = (Id: number) => {
    subCategoryId.value = Id;
    confirmDialogVisible.value = true;
  };
  const deleteSubCategory = async () => {
    try {
      await subCategoryApis.deleteSubCategory(subCategoryId.value);
      getAllSubCategories();
      notificationHelper.success('', 'deleted_successfully');
    } catch (error: any) {
      console.log(error.message);
    } finally {
      confirmDialogVisible.value = false;
    }
  };

  const onSubmit = formHelper.onSubmitForm(createSubCategory);

  onMounted(() => {
    getAllSubCategories();
  });

  return {
    subCategoryData,
    dialogFormVisible,
    formLabelWidth,
    isEditing,
    isLoading,
    ruleFormRef,
    subCategoryRequestForm,
    rules,
    onSubmit,
    onConfirmEdit,
    onClickEdit,
    confirmDialog,
    confirmDialogVisible,
    deleteSubCategory
  };
}
