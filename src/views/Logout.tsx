import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import routes from 'routes';
import { useLogout, useUserIsAuthenticated } from 'store/auth';

export function Logout () {
  const logout = useLogout();
  const isAuthenticated = useUserIsAuthenticated();

  useEffect(logout, [logout]);

  if (isAuthenticated) {
    return <p>Logging out...</p>;
  }

  return <Navigate to={routes.home()} />;
}
