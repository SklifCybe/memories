import { Dispatch } from 'react';

export const AUTH = 'AUTH/AUTH';
export const LOGOUT = 'AUTH/LOGOUT';

export type AuthUser = {
  fullName: string;
  avatar: string;
  token: string;
} | null;

export type AuthType = {
  type: ReturnType<() => typeof AUTH>;
  payload: {
    user: AuthUser;
  };
};

export type LogoutType = {
  type: ReturnType<() => typeof LOGOUT>;
};

export type ActionTypes = AuthType | LogoutType;

export type initialStateType = {
  user: AuthUser;
};

export type DispatchType = (action: ActionTypes) => Dispatch<ActionTypes>;

export type SignInForm = {
  email: string;
  password: string;
};

export type SignUpForm = {
  email: string;
  password: string;
  repeatPassword: string;
  firstName: string;
  lastName: string;
};

export type AuthResponse = {
  result: {
    avatar: string;
    fullName: string;
  };
  token: string;
};