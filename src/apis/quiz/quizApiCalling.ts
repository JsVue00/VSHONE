import type { ICreateQuizRequest, IGetQuizResponse } from '@/models/quiz';
import api from '../api';
import type { IAxiosPromise } from '@/models/axiosPromise';
export default {
  callCreateQuiz(request: ICreateQuizRequest) {
    return api.post('Quiz', request);
  },
  callGetAllQuizzes(): IAxiosPromise<IGetQuizResponse> {
    return api.get('Quiz');
  }
};
