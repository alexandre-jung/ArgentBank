import { Outlet } from 'react-router-dom';
import { Header } from 'components';
import { useFetchProfileOrRedirectToLogin } from 'hooks';

export default function Layout () {
  useFetchProfileOrRedirectToLogin();

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
