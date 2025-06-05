export interface GetApiResponse {
  meta: {
    status: string;
    timestamp: string;
    message?: string;
  };
  data: unknown;
}
