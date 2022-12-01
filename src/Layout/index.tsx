import { Outlet } from 'react-router-dom';
import { Header } from '@components/index';
import { useFetchProfileOrRedirectToLogin } from '@hooks/index';
import { Footer } from '@components/Footer';
import styles from './styles.module.scss';

export default function Layout () {
  useFetchProfileOrRedirectToLogin();

  return (
    <div className={styles.Layout}>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
