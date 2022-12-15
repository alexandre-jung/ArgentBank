import { useUserProfileQuery } from '@store/user';
import { useFetchProfileOrRedirectToLogin } from '@hooks/index';
import { AccountsOverview, EditName } from '@components';
import styles from './styles.module.scss';

export function User () {
  useFetchProfileOrRedirectToLogin();
  const { profile } = useUserProfileQuery();

  return (
    <section className={styles.userSection}>
      <h1>
        Welcome back,<br />
        {profile?.firstName} {profile?.lastName}
      </h1>
      <EditName />
      <AccountsOverview />
    </section>
  );
}
