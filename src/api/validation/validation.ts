import { Schema, SchemaEntry, TypeValidators, ValidationItem } from './validation.types';

export const types: TypeValidators = {
  string: value => typeof value == 'string',
  number: value => typeof value == 'number',
  boolean: value => typeof value == 'boolean',
} as const;

export function validate (
  object: Record<string, unknown>,
  schema: Schema,
) {
  return Object.entries(schema)
    .map(getValidationItemsMapper(object))
    .filter(isInvalidOrFailsExtraTests)
    .map(createValidationErrorMessage);
}

function getValidationItemsMapper (object: Record<string, unknown>) {
  return function ([key, validator]: SchemaEntry): ValidationItem {
    const extraTests = [];
    const isValidOrNonExistent = (
      key in object ?
        validator(object[key]) :
        true
    );

    if (validator.required) {
      extraTests.push(key in object);
    }

    return [
      key,
      isValidOrNonExistent,
      ...extraTests,
    ];
  };
}

function isInvalidOrFailsExtraTests ([, isValid, ...extraTests]: ValidationItem) {
  return !isValid || !extraTests.every(Boolean);
}

function createValidationErrorMessage ([key, isValidOrNonExistent]: ValidationItem) {
  return `${key} is ${isValidOrNonExistent ? 'required' : 'invalid'}`;
}
