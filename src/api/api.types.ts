import { ACCOUNT_TYPES, BALANCE_TYPES } from './constants';

export type Token = string

export type ApiResponse<DataType = never> = {
  status: number
  message: string
  body: DataType
}

export type UserProfile = {
  id: string
  email: string
  firstName: string
  lastName: string
  createdAt: string
  updatedAt: string
}

export type UserLogin = {
  token: Token
}

export type UserSignup = UserProfile
export type UserUpdate = UserProfile

export type ApiErrorResponse = Omit<ApiResponse, 'body'>

export type UserCredentials = {
  email: string
  password: string
}

export type UserSignupParams = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type UserUpdateParams = {
  firstName: string
  lastName: string
}

export interface Account {
  type: AccountType;
  accountRef: string;
  balance: number;
  balanceType: BalanceType;
}

export type AccountType = typeof ACCOUNT_TYPES[number];
export type BalanceType = typeof BALANCE_TYPES[number];
