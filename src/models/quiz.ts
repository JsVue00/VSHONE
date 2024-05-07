export interface ICreateQuizRequest {
  SubCategoryId: number | null;
  CategoryId?: number | null;
  UserId?: number | string;
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
  UserId: null;
  GameName: string;
  Title: string;
  Question: string;
  Image: null;
  Options: string;
  CorrectAnswer: number;
  Answered: boolean;
}

export interface Option {
  model: string;
  value: string;
}
