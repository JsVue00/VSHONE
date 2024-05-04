export interface IApiResponse<T> {
  data: T | T[];
  ErrorCode: number;
  Message: string;
}
