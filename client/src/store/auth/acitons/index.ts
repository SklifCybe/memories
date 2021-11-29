import { AUTH, AuthType, AuthUser, LogoutType, LOGOUT } from '../types';

export const authAC = (user: AuthUser): AuthType => ({
  type: AUTH,
  payload: {
    user,
  },
});

export const logoutAC = (): LogoutType => ({
  type: LOGOUT,
});
