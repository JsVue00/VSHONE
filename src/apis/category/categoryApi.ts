import type { ICategoryRequest } from '@/models/category';
import api from '../api';
import categoryApiCalling from './categoyApiCalling';

const categoryApis = {
  getAllQuizzizApi() {
    api.get('quiz');
  },
  getAllCategories() {
    return categoryApiCalling.callGetAllCategories();
  },
  createCategory(request: ICategoryRequest) {
    return categoryApiCalling.callCreateCategory(request);
  },

  deleteCategory(Id: number) {
    return categoryApiCalling.callDeleteCategory(Id);
  },
  getCategoryById(Id: number) {
    return categoryApiCalling.callGetCategoryById(Id);
  },
  updateCategory(Id: number, request: ICategoryRequest) {
    return categoryApiCalling.callUpdateCategory(Id, request);
  }
};

export default categoryApis;
