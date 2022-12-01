import { Logo, Navigation } from '@components/index';
import styles from './styles.module.scss';

export function Header () {
  return (
    <header className={styles.Header}>
      <Logo />
      <Navigation />
    </header>
  );
}
