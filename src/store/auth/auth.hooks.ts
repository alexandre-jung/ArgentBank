import { useAppDispatch, useAppSelector } from 'store';
import { authenticationThunk } from './auth.slice';

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

export function useAuthenticate () {
  const dispatch = useAppDispatch();
  return (email: string, password: string) => dispatch(authenticationThunk({
    email,
    password,
  }));
}
