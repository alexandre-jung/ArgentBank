import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogout, useUserIsAuthenticated } from 'store/auth';
import { useLogoutRedirectTarget } from 'hooks/index';
import routes from '../routes';

export function Logout () {
  const logout = useLogout();
  const isAuthenticated = useUserIsAuthenticated();
  const targetRoute = useLogoutRedirectTarget(routes.home());

  useEffect(logout, [logout]);

  if (isAuthenticated) {
    return <p>Logging out...</p>;
  }

  return <Navigate
    to={{ pathname: targetRoute }}
    replace
  />;
}
