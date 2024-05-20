import axios from 'axios';
const BASE_URL = 'https://localhost:3001';
const api = axios.create({
  baseURL: BASE_URL + '/api/'
});
export function getImage(folder: string, fileName: string): string {
  return `${BASE_URL}/api/ImageUpload/get/${folder}/${fileName}`;
}
export async function uploadImage(folder: FormDataEntryValue | null, formData: FormData) {
  return await api.post(`ImageUpload/upload/${folder}`, formData)
}

export async function deleteImage(folder: string | any, fileName: string): Promise<any> {
  return await api.delete(`ImageUpload/delete/${folder}/?fileName=${fileName}`)
}

export default api;
