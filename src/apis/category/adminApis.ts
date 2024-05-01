import type { ICategoryRequest } from '@/models/category';
import api from '../api';
import adminApiCalling from './adminApiCalling';

const APIs = {
  getAllQuizzizApi: () => api.get('quiz'),
  getAllCategories: () => {
    const response = adminApiCalling.callGetAllCategories();
    return response;
  },
  createCategory: (request: ICategoryRequest) => {
    const response = adminApiCalling.callCreateCategory(request);
    return response;
  },
  deleteCategory: (Id: number) => {
    const response = adminApiCalling.callDeleteCategory(Id);
    return response;
  }
};

export default APIs;
