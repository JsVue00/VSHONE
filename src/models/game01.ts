export interface IGame01 {
  id: number;
  qa: string;
  category?: string;
  subCategory?: string;
  image?: string;
  options: string[];
  isChecked: boolean;
  correctAnswer: number;
}
