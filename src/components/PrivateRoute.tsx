import { Navigate } from 'react-router-dom';
import { useUserIsAuthenticated } from 'store/auth';
import routes from 'routes';

type PrivateRouteProps = {
  children: React.ReactNode
}

export function PrivateRoute ({ children }: PrivateRouteProps) {
  const isAuthenticated = useUserIsAuthenticated();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to={routes.login()} replace />;
}
