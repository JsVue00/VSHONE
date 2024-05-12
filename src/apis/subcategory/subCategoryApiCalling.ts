import type { ISubCategoryDataResponse, ISubCategoryRequest } from '@/models/subCategory';
import api from '../api';
import type { IAxiosPromise } from '@/models/axiosPromise';

export default {
  callGetAllSubCategories(): IAxiosPromise<ISubCategoryDataResponse> {
    return api.get('subcategory');
  },
  callCreateSubCategory(request: ISubCategoryRequest) {
    return api.post('subcategory', request);
  },
  callUpdateSubCategory(Id: number, request: ISubCategoryRequest) {
    return api.put('subcategory/' + Id, request);
  },
  callDeleteSubCategory(Id: number) {
    return api.delete('subcategory/' + Id);
  }
};
