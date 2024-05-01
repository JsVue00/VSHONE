import type { ICategoryRequest, ICategoryResponse } from '@/models/category';
import api from '../api';

export default {
  callCreateCategory: (request: ICategoryRequest) => {
    return api.post('category', request);
  },
  callGetAllCategories: () => {
    return api.get('category');
  },
  callDeleteCategory: (Id: number) => {
    return api.delete('category?categoryId=' + Id);
  }
};
