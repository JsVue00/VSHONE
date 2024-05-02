export interface ICategoryRequest {
  CategoryName: string;
  Image: string;
  Description: string;
}

export interface ICategoryResponse {
  categoryId: number;
  categoryName: string;
  image: string;
  description: string;
}
