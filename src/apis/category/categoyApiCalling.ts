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
  },
  callUpdateCategory: (Id: number, request: ICategoryRequest) => {
    return api.put('category/' + Id, request);
  },
  callGetCategoryById: (CategoryId: number) => {
    return api.get('category/' + CategoryId);
  }
};
