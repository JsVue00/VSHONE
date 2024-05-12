import type { IAxiosPromise } from '@/models/axiosPromise';
import quizApiCalling from './quizApiCalling';
import type { ICreateQuizRequest, IGetQuizResponse } from '@/models/quiz';

export default {
  createQuiz(request: ICreateQuizRequest) {
    return quizApiCalling.callCreateQuiz(request);
  },
  getAllQuizzes(): IAxiosPromise<IGetQuizResponse> {
    return quizApiCalling.callGetAllQuizzes();
  },
  getQuizById(Id: number): IAxiosPromise<IGetQuizResponse> {
    return quizApiCalling.callGetQuizById(Id);
  },
  updateQuiz(Id: number, reqest: ICreateQuizRequest) {
    return quizApiCalling.callUpdateQuiz(Id, reqest);
  },
  deleteQuiz(Id: number) {
    return quizApiCalling.callDeleteQuiz(Id);
  }
};
