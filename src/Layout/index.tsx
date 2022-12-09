import { Outlet } from 'react-router-dom';
import { Header } from '@components/index';
import { Footer } from '@components/Footer';
import styles from './styles.module.scss';

export default function Layout () {
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
