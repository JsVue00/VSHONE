export interface IGetCourseResponse {
  Title: string;
  CategoryId: number | null;
  SubCategoryId: number | null;
  Description?: string;
  Credit: string;
  VideoLink: string;
}
