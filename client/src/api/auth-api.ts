import { API } from './';
import { SignInForm } from '../store/auth/types';

class AuthAPI extends API {
  private ENDPOINT = '/users';

  public signin(formData: SignInForm) {
    return this.api.post(`${this.ENDPOINT}/signin`, formData);
  }

  public signup() {
    return this.api.post(`${this.ENDPOINT}/signup`);
  }
}

export const authApi = new AuthAPI();
