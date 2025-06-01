import { AuthorizationStatus } from '../const';

export type AuthorizationStatusType =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];

export type LoginType = {
  email: string;
  password: string;
};

export type UserData = {
  email: string;
  token: string;
};

export type UserStateType = {
  authorizationStatus: AuthorizationStatusType;
  email: string | null;
  token: string | null;
  error: string | null;
};
