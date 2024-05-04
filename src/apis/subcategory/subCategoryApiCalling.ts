import type { ISubCategoryRequest } from '@/models/subCategory';
import api from '../api';

export default {
  callGetAllSubCategories() {
    return api.get('subcategory');
  },
  callCreateSubCategory(request: ISubCategoryRequest) {
    return api.post('subcategory', request);
  }
};
