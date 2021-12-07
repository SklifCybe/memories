import { API } from './';
import { SignInForm, SignUpForm } from '../store/auth/types';

class AuthAPI extends API {
  private ENDPOINT = '/users';

  public signin(formData: SignInForm) {
    return this.api.post(`${this.ENDPOINT}/signin`, formData);
  }

  public signup(formData: SignUpForm) {
    return this.api.post(`${this.ENDPOINT}/signup`, formData);
  }
}

export const authApi = new AuthAPI();
