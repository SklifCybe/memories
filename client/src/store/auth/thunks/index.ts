import { authApi } from '../../../api/auth-api';
import { authAC } from '../acitons';
import { SignInForm, DispatchType, AuthUser, AuthResponse, SignUpForm } from '../types';

const getUser = (data: AuthResponse): AuthUser => ({
  fullName: data.result.fullName,
  avatar: data.result.avatar,
  token: data.token,
});

export const signin = (formData: SignInForm) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: AuthResponse } = await authApi.signin(formData);

    const user = getUser(data);

    dispatch(authAC(user));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
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
      console.error(err.message);
    }
  }
};
