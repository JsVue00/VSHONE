import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import subCategoryApiCalling from './subCategoryApiCalling';
import type { IAxiosPromise } from '@/models/axiosPromise';

const subCategoryApis = {
  async getAllSubCategories(): IAxiosPromise<ISubCategoryDataResponse> {
    return await subCategoryApiCalling.callGetAllSubCategories();
  },
  async createNewSubCategory(request: ISubCategoryRequest) {
    const response = await subCategoryApiCalling.callCreateSubCategory(request);
    return response.data;
  }
};

export default subCategoryApis;
