import { HomeLinkButton } from '@components/HomeLinkButton';
import styles from './styles.module.scss';

export function NotFound () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.helpText}>This page cannot be found.</p>
      <HomeLinkButton />
    </div>
  );
}
