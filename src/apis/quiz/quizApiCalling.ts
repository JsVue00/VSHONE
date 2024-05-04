import type { ICreateQuizRequest } from '@/models/quiz';
import api from '../api';
export default {
  callCreateQuiz(request: ICreateQuizRequest) {
    return api.post('Quiz', request);
  }
};
