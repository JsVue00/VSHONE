import subCategoryApis from '@/apis/subcategory/subCategoryApi';
import type { FormInstance, FormRules } from 'element-plus';
import type { SubCategoryDataResponse } from '@/models/subCategory';
import { ref, onMounted, reactive } from 'vue';
export default function useSubCategory() {
  const dialogTableVisible = ref(false);
  const dialogFormVisible = ref(false);
  const formLabelWidth = '140px';
  const isLoading = ref(false);
  const isEditing = ref(false);
  const ruleFormRef = ref<FormInstance>();
  const subCategoryData = ref<SubCategoryDataResponse[]>([]);

  const subCategoryRequestForm = reactive<SubCategoryDataResponse>({
    Id: 0,
    CategoryId: null,
    Image: '',
    SubCategoryName: '',
    Description: ''
  });

  const getAllCategories = async () => {
    const response = await subCategoryApis.getAllCategories();
    subCategoryData.value = response;
  };
  onMounted(() => {
    getAllCategories();
  });

  return {
    subCategoryData,
    dialogFormVisible,
    dialogTableVisible,
    formLabelWidth,
    isEditing,
    isLoading,
    ruleFormRef,
    subCategoryRequestForm
  };
}
