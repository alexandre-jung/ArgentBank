import {
  Token,
  UserCredentials,
  UserLogin,
  UserProfile,
  UserSignup,
  UserSignupParams,
  UserUpdate,
  UserUpdateParams,
} from './api.types';
import { ApiRequest } from './ApiRequest';
import { endpoints } from './config';
import { validators } from './validators';

export const Api = {
  user: {
    async signup (signupInfo: UserSignupParams) {
      const path = endpoints.user.signup;
      const response = await new ApiRequest<UserSignup>(path)
        .setData(signupInfo)
        .post();
      validators.user.validateProfile(response);
      return response;
    },

    async login (credentials: UserCredentials) {
      const path = endpoints.user.login;
      const response = await new ApiRequest<UserLogin>(path)
        .setData(credentials)
        .post();
      validators.user.validateLogin(response);
      return response;
    },

    async profile (token: Token) {
      const path = endpoints.user.profile;
      const response = await new ApiRequest<UserProfile>(path)
        .setAuthentication(token)
        .post();
      validators.user.validateProfile(response);
      return response;
    },

    async update (updateInfo: UserUpdateParams, token: Token) {
      const path = endpoints.user.update;
      const response = await new ApiRequest<UserUpdate>(path)
        .setAuthentication(token)
        .setData(updateInfo)
        .put();
      validators.user.validateProfile(response);
      return response;
    },
  },
};
