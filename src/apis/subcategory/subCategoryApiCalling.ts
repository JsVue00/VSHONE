import type { ISubCategoryRequest } from '@/models/subCategory';
import api from '../api';

export default {
  callGetAllSubCategories: async () => {
    const response = await api.get('subcategory');
    return response;
  },
  callCreateSubCategory: async (request: ISubCategoryRequest) => {
    return await api.post('subcategory', request);
  }
};
