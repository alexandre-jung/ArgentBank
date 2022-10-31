export class ApiError extends Error {
  readonly status: number;
  readonly statusText: string;

  constructor (
    message: string,
    status: number,
    statusText: string,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.statusText = statusText;
  }

  static async fromApiResponse (
    response: Response,
    extractDetails: (response: Response) => Promise<string>,
  ) {
    const errorDetails = await extractDetails(response);
    const formattedErrorMessage = ApiError.formatApiErrorMessage(errorDetails);

    return new ApiError(
      formattedErrorMessage,
      response.status,
      response.statusText,
    );
  }

  private static formatApiErrorMessage (dirtyMessage: string) {
    const cleanMessage = dirtyMessage.replace(/Error[\W\s]*/i, '');
    return cleanMessage.slice(0, 1).toUpperCase() + cleanMessage.slice(1).toLowerCase();
  }

  toString () {
    const header = `${this.name}: ${this.status} ${this.statusText}`;
    if (this.message) {
      return `${header} - ${this.message}`;
    }
    return header;
  }
}
