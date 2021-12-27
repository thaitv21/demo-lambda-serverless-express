export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface InvokeParams<T> {
  functionName: string,
  path: string,
  querystring: any,
  data: T,
  method: RequestMethod,
}