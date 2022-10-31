const API_HOST = import.meta.env.VITE_API_HOST;
const API_VERSION = import.meta.env.VITE_API_VERSION;
const API_VERSION_STRING = `v${API_VERSION}`;

export const BASE_URL = `${API_HOST}/api/${API_VERSION_STRING}`;

export const endpoints = {
  user: {
    signup: 'user/signup',
    login: 'user/login',
    profile: 'user/profile',
    update: 'user/profile',
  },
};
