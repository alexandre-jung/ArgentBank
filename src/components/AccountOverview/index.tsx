import { AccountType, BalanceType } from '@api/api.types';
import { Balance } from '@components/Balance';
import { Button } from '@components/Button';
import { BALANCE_TYPE_LABELS, TYPE_LABELS } from './constants';
import styles from './styles.module.scss';

interface AccountOverviewListProps {
  children: React.ReactNode;
}

const AccountOverviewList = ({ children }: AccountOverviewListProps) => (
  <section className={styles.AccountsOverview}>
    {children}
  </section>
);

interface AccountProps {
  type: AccountType;
  accountRef: string;
  balance: number;
  balanceType: BalanceType;
}

function Account ({ type, accountRef, balance, balanceType }: AccountProps) {
  const label = `Argent Bank ${TYPE_LABELS[type]} (${accountRef})`;

  return (
    <div className={styles.Account}>
      <div className={styles.detailsWrapper}>
        <p className="m-0">{label}</p>
        <p className={styles.balance}>
          <Balance amountInCents={balance} localeCode="en-US" />
        </p>
        <p className="m-0">{`${BALANCE_TYPE_LABELS[balanceType]} Balance`}</p>
      </div>
      <Button>
        View transactions
      </Button>
    </div>
  );
}

export const AccountOverview: typeof AccountOverviewList & {
  Account: typeof Account
} = AccountOverviewList;

AccountOverviewList.Account = Account;
