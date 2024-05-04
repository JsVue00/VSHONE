import api from '../api';

export default {
  callGetAllSubCategories: async () => {
    const response = await api.get('subcategory');
    return response;
  }
};
