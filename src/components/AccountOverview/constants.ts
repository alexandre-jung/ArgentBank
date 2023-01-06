import { AccountType, BalanceType } from '@api/api.types';

export const TYPE_LABELS: Record<AccountType, string> = {
  checking: 'Checking',
  savings: 'Savings',
  creditCard: 'Credit Card',
};

export const BALANCE_TYPE_LABELS: Record<BalanceType, string> = {
  available: 'Available',
  current: 'Current',
};
