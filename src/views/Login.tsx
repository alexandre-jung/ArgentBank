import { Navigate } from 'react-router-dom';
import { LoginForm } from 'components';
import { useUserIsAuthenticated } from 'store/auth';
import routes from 'routes';

export function Login () {
  const isAuthenticated = useUserIsAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={routes.user()} />;
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  );
}
