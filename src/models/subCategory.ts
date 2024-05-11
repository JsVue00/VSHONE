export interface ISubCategoryRequest {
  CategoryId: number | null;
  SubCategoryName: string;
  Image: string;
  Description: string;
}
export interface ISubCategoryDataResponse {
  Id: number;
  CategoryId: number;
  CategoryName: string;
  SubCategoryName: string;
  Image: string | null;
  TotalQuizzes: number;
  Description: string;
  CreatedAt: string;
  ModifiedAt: string | null;
}
