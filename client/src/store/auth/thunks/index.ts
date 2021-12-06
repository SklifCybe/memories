import { authApi } from '../../../api/auth-api';
import { authAC } from '../acitons';
import { SignInForm, DispatchType, AuthUser, ResponseSignIn } from '../types';

export const signin = (formData: SignInForm) => async (dispatch: DispatchType) => {
  try {
    const { data }: { data: ResponseSignIn } = await authApi.signin(formData);

    const user: AuthUser = {
      fullName: data.result.fullName,
      avatar: data.result.avatar,
      token: data.token,
    };

    dispatch(authAC(user));
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
};
