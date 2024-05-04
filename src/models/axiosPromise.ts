import type { IApiResponse } from './apiResponse';

export interface IAxiosResponse<T> {
  data: IApiResponse<T>;
}
export type IAxiosPromise<T> = Promise<IAxiosResponse<T>>;
