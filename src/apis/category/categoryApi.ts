import type { ICategoryRequest } from '@/models/category';
import categoryApiCalling from './categoyApiCalling';

const categoryApis = {
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
