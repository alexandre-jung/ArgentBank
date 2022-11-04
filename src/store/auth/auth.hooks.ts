import { useAppDispatch, useAppSelector } from 'store';
import { actions, authenticationThunk } from './auth.slice';

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
  return () => {
    dispatch(actions.logout());
  };
}

export function useAuthenticate () {
  const dispatch = useAppDispatch();
  return (email: string, password: string) => dispatch(authenticationThunk({
    email,
    password,
  }));
}
