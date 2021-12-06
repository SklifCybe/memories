import axios from 'axios';

const baseURL = 'http://localhost:5050/api';

export class API {
  protected api = axios.create({ baseURL });
}
