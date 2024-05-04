import type { ICategoryRequest } from '@/models/category';
import api from '../api';
import categoryApiCalling from './categoyApiCalling';

const categoryApis = {
  getAllQuizzizApi: () => api.get('quiz'),
  getAllCategories: () => {
    const response = categoryApiCalling.callGetAllCategories();
    return response;
  },
  createCategory: (request: ICategoryRequest) => {
    const response = categoryApiCalling.callCreateCategory(request);
    return response;
  },

  deleteCategory: (Id: number) => {
    const response = categoryApiCalling.callDeleteCategory(Id);
    return response;
  },
  getCategoryById: (Id: number) => {
    const response = categoryApiCalling.callGetCategoryById(Id);
    return response;
  },
  updateCategory: (Id: number, request: ICategoryRequest) => {
    const response = categoryApiCalling.callUpdateCategory(Id, request);
    return response;
  }
};

export default categoryApis;
