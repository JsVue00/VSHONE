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
  quizId: number;
  categoryId: number;
  categoryName: string;
  userId: null;
  gameName: string;
  title: string;
  question: string;
  image: null;
  options: string;
  correctAnswer: number;
  answered: boolean;
}

export interface Option {
  model: string;
  value: string;
}
