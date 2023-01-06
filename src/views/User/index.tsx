import { useUserProfileQuery } from '@store/user';
import { useFetchProfileOrRedirectToLogin } from '@hooks/index';
import { AccountOverview, EditName } from '@components';
import { Accounts } from '@api/mock';
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
      <AccountOverview>
        {Accounts.map(account => (
          <AccountOverview.Account
            type={account.type}
            accountRef={account.accountRef}
            balance={account.balance}
            balanceType={account.balanceType}
            key={account.accountRef}
          />
        ))}
      </AccountOverview>
    </section>
  );
}
