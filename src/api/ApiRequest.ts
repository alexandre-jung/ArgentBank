import { BASE_URL } from './config';
import { ApiErrorResponse, ApiResponse, Token } from './api.types';
import { ApiError } from './errors';

export class ApiRequest<DataType> {
  private readonly url!: string;
  private headers: Record<string, string> = {};
  private data?: Record<string, unknown>;

  constructor (path: string) {
    this.url = this.getUrlFromPath(path);
  }

  private getUrlFromPath (path: string) {
    const pathWithoutLeadingSlash = path.replace(/^\/*/g, '');
    return `${BASE_URL}/${pathWithoutLeadingSlash}`;
  }

  private async send (method: 'post' | 'put') {
    const fetchInit = this.getFetchInit(method);
    const response = await fetch(this.url, fetchInit);

    if (response.ok) {
      const { body }: ApiResponse<DataType> = await response.json();
      return body;
    }

    const error = await ApiRequest.createErrorFromResponse(response);
    return Promise.reject(error);
  }

  private getFetchInit (method: 'post' | 'put') {
    const init: RequestInit = {};

    init.method = method;

    if (this.data) {
      init.body = JSON.stringify(this.data);
    }

    if (Object.keys(this.headers).length) {
      init.headers = this.headers;
    }

    return init;
  }

  private static async createErrorFromResponse (response: Response) {
    return ApiError.fromApiResponse(
      response,
      ApiRequest.extractMessageFromResponse,
    );
  }

  private static async extractMessageFromResponse (response: Response) {
    let errorMessage = '';
    const contentType = response.headers.get('Content-type');

    if (contentType?.startsWith('application/json')) {
      const { message }: ApiErrorResponse = await response.json();
      errorMessage = message;
    }

    return errorMessage;
  }

  setAuthentication (token: Token) {
    this.headers.Authorization = `Bearer ${token}`;
    return this;
  }

  setData (data: Record<string, unknown>) {
    this.headers['Content-Type'] = 'application/json';
    this.data = data;
    return this;
  }

  post = () => this.send('post');
  put = () => this.send('put');
}
