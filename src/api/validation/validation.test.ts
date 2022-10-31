import { types, validate } from './validation';

describe('validation', () => {
  it('should validate an object with a string property', () => {
    const schema = { firstName: types.string };
    const objectToValidate = { firstName: 'Gus' };
    expect(validate(objectToValidate, schema).length).toEqual(0);
  });

  it('should validate an object with a number property', () => {
    const schema = { age: types.number };
    const objectToValidate = { firstName: 'Gus', age: 42 };
    expect(validate(objectToValidate, schema).length).toEqual(0);
  });

  it('should validate an object with a boolean property', () => {
    const schema = { isRegistered: types.boolean };
    const objectToValidate = { isRegistered: true };
    expect(validate(objectToValidate, schema).length).toEqual(0);
  });

  it('should validate an empty object without required properties', () => {
    const schema = { firstName: types.string };
    const objectToValidate = {};
    expect(validate(objectToValidate, schema).length).toEqual(0);
  });

  it('should report an error if firstName is not a string', () => {
    const schema = { firstName: types.string };
    const objectToValidate = { firstName: 42 };
    expect(validate(objectToValidate, schema)).toEqual(['firstName is invalid']);
  });

  it('should report an error if age is not a number', () => {
    const schema = { age: types.number };
    const objectToValidate = { age: '42' };
    expect(validate(objectToValidate, schema)).toEqual(['age is invalid']);
  });

  it('should report an error if isRegistered is not a boolean', () => {
    const schema = { isRegistered: types.boolean };
    const objectToValidate = { isRegistered: 'false' };
    expect(validate(objectToValidate, schema)).toEqual(['isRegistered is invalid']);
  });

  it('should report an error on a missing required property', () => {
    const schema = { firstName: types.string };
    schema.firstName.required = true;
    const objectToValidate = {};
    expect(validate(objectToValidate, schema)).toEqual(['firstName is required']);
  });

  it('should report multiple errors', () => {
    const schema = {
      firstName: types.string,
      age: types.number,
      isRegistered: types.boolean,
      okProperty: types.string,
    };
    schema.firstName.required = true;
    const objectToValidate = {
      age: '25',
      isRegistered: 'nope',
      okProperty: 'ok',
    };
    expect(validate(objectToValidate, schema)).toEqual([
      'firstName is required',
      'age is invalid',
      'isRegistered is invalid',
    ]);
  });
});
