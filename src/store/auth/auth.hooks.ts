import { useAppDispatch, useAppSelector } from 'store';
import { actions, authenticationThunk } from './auth.slice';
import { useCallback } from 'react';

export function useAuthenticationQuery () {
  return useAppSelector(state => ({
    isFetching: state.auth.isFetching,
    error: state.auth.error,
    token: state.auth.token,
  }));
}

export function useUserIsAuthenticated () {
  return useAppSelector(state => !!state.auth.token);
}

export function useLogout () {
  const dispatch = useAppDispatch();

  return useCallback(() => {
    dispatch(actions.logout());
  }, [dispatch]);
}

export function useAuthenticate (persistToken?: boolean) {
  const dispatch = useAppDispatch();
  return (email: string, password: string) => dispatch(authenticationThunk({
    credentials: {
      email,
      password,
    },
    options: {
      persistToken,
    },
  }));
}
