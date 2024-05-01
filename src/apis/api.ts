import axios from 'axios';
const BASE_URL = 'https://localhost:3001';
const api = axios.create({
  baseURL: BASE_URL + '/api/'
});

export default api;
