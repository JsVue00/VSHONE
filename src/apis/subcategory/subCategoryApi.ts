import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import subCategoryApiCalling from './subCategoryApiCalling';
import type { IAxiosPromise } from '@/models/axiosPromise';

const subCategoryApis = {
  async getAllSubCategories(): IAxiosPromise<ISubCategoryDataResponse> {
    return await subCategoryApiCalling.callGetAllSubCategories();
  },
  async createNewSubCategory(request: ISubCategoryRequest): IAxiosPromise<any> {
    const response = await subCategoryApiCalling.callCreateSubCategory(request);
    return response.data;
  },
  async updateSubCategory(Id: number, request: ISubCategoryRequest): IAxiosPromise<any> {
    return await subCategoryApiCalling.callUpdateSubCategory(Id, request);
  },
  async deleteSubCategory(Id: number) {
    return await subCategoryApiCalling.callDeleteSubCategory(Id);
  }
};

export default subCategoryApis;
