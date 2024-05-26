import axios from 'axios';
import type { UploadRawFile } from 'element-plus';
const BASE_URL = 'https://localhost:3001';
const api = axios.create({
  baseURL: BASE_URL + '/api/'
});
export function getImage(folder: string, fileName: string): string {
  return `${BASE_URL}/api/ImageUpload/get/${folder}/${fileName}`;
}
export async function uploadImage(file: UploadRawFile, folder: string) {
  const fileName = file.name.split(' ').join('_');
  const formData = new FormData();
  formData.append("file", file, fileName);
  formData.append("folder", folder);
  return await api.post(`ImageUpload/upload/${folder}`, formData)
}

export async function deleteImage(folder: string | any, fileName?: string): Promise<any> {
  if (!fileName) {
    return await api.delete(`ImageUpload/delete/${folder}`)
  } else {
    return await api.delete(`ImageUpload/delete/${folder}/?fileName=${fileName}`)
  }
}

export async function uploadMultipleImages(files: UploadRawFile[], folder: FormDataEntryValue) {
  const formData = new FormData();
  for (const file of files) {
    const fileName = file.name.split(' ').join('_');
    formData.append('files', file, fileName);
  }
  formData.append('folder', folder);
  const response = await api.post(`ImageUpload/upload/multi/${folder}`, formData)
  return response.data;
}

export default api;
