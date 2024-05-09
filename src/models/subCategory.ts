export interface ISubCategoryRequest {
  CategoryId: number | null;
  SubCategoryName: string;
  Image: string;
  Description: string;
}
export interface ISubCategoryDataResponse {
  Id: number;
  CategoryId: number | null;
  SubCategoryName: string;
  TotalQuizzes: number;
  Image: null | string;
  Description: string;
}
