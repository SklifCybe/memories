import axios from 'axios';

const baseURL = 'http://localhost:5050/api';

export const api = axios.create({ baseURL });

api.interceptors.request.use((req) => {
  const user = localStorage.getItem('userData');

  if (user && req.headers) {
    const { token } = JSON.parse(user);
    req.headers.authorization = `Bearer ${token}`;
  }

  return req;
});