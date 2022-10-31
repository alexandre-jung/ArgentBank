import { userLoginSchema, userProfileSchema } from './schemas';
import { validate } from '../validation';
import { ValidationError } from '../errors';
import { Schema } from '../validation/validation.types';

export const validators = {
  user: {
    validateLogin (value: Record<string, unknown>) {
      validateOrThrow(
        value,
        userLoginSchema,
        'Login response is invalid',
      );
    },

    validateProfile (value: Record<string, unknown>) {
      validateOrThrow(
        value,
        userProfileSchema,
        'User profile response is invalid',
      );
    },
  },
};

function validateOrThrow (
  value: Record<string, unknown>,
  schema: Schema,
  messageOnError = 'Data is invalid',
) {
  if (import.meta.env.DEV) {
    return true;
  }

  const errors = validate(value, schema);

  if (errors.length > 0) {
    throw new ValidationError(messageOnError, errors);
  }
}
