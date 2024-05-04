import type { ISubCategoryRequest } from '@/models/subCategory';
import subCategoryApiCalling from './subCategoryApiCalling';

const subCategoryApis = {
  getAllSubCategories: async () => {
    const response = await subCategoryApiCalling.callGetAllSubCategories();
    return response.data.Data;
  },
  createNewSubCategory: async (request: ISubCategoryRequest) => {
    const response = await subCategoryApiCalling.callCreateSubCategory(request);
    return response.data;
  }
};

export default subCategoryApis;
