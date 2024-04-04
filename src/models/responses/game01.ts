export interface Game01 {
  id: number;
  qa: string;
  category?: string;
  subCategory?: string;
  image?: string;
  options: string[];
  isChecked: boolean;
  correctAnswer: number;
}
