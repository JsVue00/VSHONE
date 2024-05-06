import type { IAxiosPromise } from '@/models/axiosPromise';
import quizApiCalling from './quizApiCalling';
import type { ICreateQuizRequest, IGetQuizResponse } from '@/models/quiz';

export default {
  createQuiz(request: ICreateQuizRequest) {
    return quizApiCalling.callCreateQuiz(request);
  },
  getAllQuizzes(): IAxiosPromise<IGetQuizResponse> {
    return quizApiCalling.callGetAllQuizzes();
  }
};
