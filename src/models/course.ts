export interface IGetCourseResponse {
  Id:number
  Title: string;
  CategoryId: number | null;
  SubCategoryId: number | null;
  Description?: string;
  Credit: string;
  VideoLink: string;
  CreatedAt: Date | null;
  ModifiedAt: Date | null;
}

export interface ICreateCourseRequest {
  Title: string;
  CategoryId: number | null;
  SubCategoryId: number | null;
  Description?: string;
  Credit: string;
  VideoLink: string;
}
