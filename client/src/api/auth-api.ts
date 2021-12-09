import { api } from './';
import { SignInForm, SignUpForm } from '../store/auth/types';

const ENDPOINT = '/users';

export const signin = (formData: SignInForm) => {
  return api.post(`${ENDPOINT}/signin`, formData);
};

export const signup = (formData: SignUpForm) => {
  return api.post(`${ENDPOINT}/signup`, formData);
};
