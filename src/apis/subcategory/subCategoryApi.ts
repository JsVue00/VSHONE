import type { ISubCategoryRequest } from '@/models/subCategory';
import subCategoryApiCalling from './subCategoryApiCalling';

const subCategoryApis = {
  async getAllCategories() {
    const response = await subCategoryApiCalling.callGetAllSubCategories();
    return response.data.Data;
  },
  async createNewSubCategory(request: ISubCategoryRequest) {
    const response = await subCategoryApiCalling.callCreateSubCategory(request);
    return response.data;
  }
};

export default subCategoryApis;
