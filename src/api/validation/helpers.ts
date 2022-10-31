import { Schema } from './validation.types';

export function setAllPropertiesRequired<T extends Schema> (schema: T) {
  for (const key of Object.keys(schema)) {
    const validator = schema[key as keyof T];
    validator.required = true;
  }
}
