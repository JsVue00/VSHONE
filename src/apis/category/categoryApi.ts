import type { ICategoryRequest, ICategoryResponse } from '@/models/category';
import categoryApiCalling from './categoyApiCalling';
import type { IAxiosPromise } from '@/models/axiosPromise';

const categoryApis = {
  getAllCategories(): IAxiosPromise<ICategoryResponse> {
    return categoryApiCalling.callGetAllCategories();
  },
  createCategory(request: ICategoryRequest) {
    return categoryApiCalling.callCreateCategory(request);
  },

  deleteCategory(Id: number) {
    return categoryApiCalling.callDeleteCategory(Id);
  },
  getCategoryById(Id: number): IAxiosPromise<ICategoryResponse> {
    return categoryApiCalling.callGetCategoryById(Id);
  },
  updateCategory(Id: number, request: ICategoryRequest) {
    return categoryApiCalling.callUpdateCategory(Id, request);
  }
};

export default categoryApis;
