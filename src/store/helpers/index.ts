import { ApiError } from '@api/errors';

export function serializeError (error: unknown) {
  if (error instanceof ApiError) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.status,
    };
  } else if (error instanceof Error) {
    return {
      name: error.message,
      message: error.message,
      stack: error.stack,
    };
  } else {
    return {
      name: 'Unknown error',
      message: 'Something bad happened',
    };
  }
}
