export interface IApiResponse<T> {
  Data: T | T[];
  ErrorCode: number;
  Message: string;
}
