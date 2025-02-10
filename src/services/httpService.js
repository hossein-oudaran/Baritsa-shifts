import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:1337';

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
  patch: app.patch,
};

export default http;
