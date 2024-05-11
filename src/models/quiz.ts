export interface ICreateQuizRequest {
  SubCategoryId: number | null;
  CategoryId?: number | null;
  Title: string;
  GameName: string;
  Question: string;
  Image?: string;
  Options: string[] | string;
  CorrectAnswer: number | null;
}

export interface IGetQuizResponse {
  QuizId: number;
  CategoryId: number;
  CategoryName: string;
  SubCategoryId: number;
  SubCategoryName: string;
  GameName: string;
  Title: string;
  Question: string;
  Image: string | null;
  Options: string;
  CorrectAnswer: number;
  CreatedBy: string | null;
  ModifiedBy: string | null;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface Option {
  model: string;
  value: string;
}
