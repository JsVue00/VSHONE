import quizApiCalling from './quizApiCalling';
import type { ICreateQuizRequest } from '@/models/quiz';

export default {
  createQuiz(request: ICreateQuizRequest) {
    return quizApiCalling.callCreateQuiz(request);
  },
  getAllQuizzes() {
    return quizApiCalling.callGetAllQuizzes();
  }
};
