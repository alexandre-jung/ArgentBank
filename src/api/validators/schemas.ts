import { setAllPropertiesRequired, types } from '../validation';

export const userLoginSchema = {
  token: types.string,
};
userLoginSchema.token.required = true;

export const userProfileSchema = {
  id: types.string,
  email: types.string,
  firstName: types.string,
  lastName: types.string,
  createdAt: types.string,
  updatedAt: types.string,
};
setAllPropertiesRequired(userProfileSchema);
