import * as authApi from '../../../api/auth-api';
import { authAC } from '../acitons';
import { AxiosError } from 'axios';
import {
  SignInForm,
  DispatchType,
  AuthUser,
  AuthResponse,
  SignUpForm,
  ErrorSignIn,
} from '../types';

const getUser = (data: AuthResponse): AuthUser => ({
  id: data.result.id,
  fullName: data.result.fullName,
  avatar: data.result.avatar,
  token: data.token,
});

const isAxiosError = (obj: any): obj is AxiosError<ErrorSignIn, null> => {
  return true && 'response' in obj;
};

export const signin = (formData: SignInForm) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: AuthResponse } = await authApi.signin(formData);

    const user = getUser(data);

    dispatch(authAC(user));
  } catch (err) {
    if (err instanceof Error) {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      } else {
        console.error(err.message);
      }
    }
  }
};

export const signup = (formData: SignUpForm) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: AuthResponse } = await authApi.signup(formData);

    const user = getUser(data);

    dispatch(authAC(user));
  } catch (err) {
    if (err instanceof Error) {
      if (isAxiosError(err)) {
        alert(err.response?.data.message);
      } else {
        console.error(err.message);
      }
    }
  }
};
