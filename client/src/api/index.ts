import axios from 'axios';

const baseURL = 'http://localhost:5050/api';

export class API {
  protected api = axios.create({ baseURL });

  constructor() {
    const user = localStorage.getItem('userData');

    if (user) {
      const { token } = JSON.parse(user);
      this.api = axios.create({ baseURL, headers: { authorizatoin: `Bearer ${token}` } });
    }
  }
}
