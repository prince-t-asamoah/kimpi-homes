export interface GetApiResponse<T> {
  status: string;
  timestamp: string;
  data: T;
}
