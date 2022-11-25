import { Middleware } from '@reduxjs/toolkit';
import { actions, authenticationThunk } from '@store/auth/auth.slice';

export const StoreJwtToken: (tokenKey: string) => Middleware = (tokenKey: string) => store => next => action => {
  switch (action.type) {
    case authenticationThunk.fulfilled.toString():
      if (action.payload.persistToken) {
        localStorage.setItem(tokenKey, action.payload.token);
      }
      sessionStorage.setItem(tokenKey, action.payload.token);
      break;
    case actions.logout.toString():
      localStorage.removeItem(tokenKey);
      sessionStorage.removeItem(tokenKey);
      break;
    case actions.retrieveToken.toString():
      store.dispatch(
        actions.setToken(
          localStorage.getItem(tokenKey) ??
          sessionStorage.getItem(tokenKey),
        ),
      );
  }
  return next(action);
};
