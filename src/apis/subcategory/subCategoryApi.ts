import subCategoryApiCalling from './subCategoryApiCalling';

const subCategoryApis = {
  getAllCategories: async () => {
    const response = await subCategoryApiCalling.callGetAllSubCategories();
    const data = response.data.Data;
    return data;
  }
};

export default subCategoryApis;
