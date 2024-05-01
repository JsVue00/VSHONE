import quizApiCalling from './quizApiCalling';
import type { ICreateQuizRequest } from '@/models/quiz';

export default {
  createQuiz: (request: ICreateQuizRequest) => {
    const response = quizApiCalling.callCreateQuiz(request);
    return response;
  }
};
