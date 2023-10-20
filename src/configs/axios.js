import axios from 'axios';
import { store } from '../redux/store';
import queryString from 'query-string';
import { API_URL } from './apiUrl';

const axiosClient = axios.create({
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "X-Requested-With"
  },

  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  const url = API_URL;
  const token = await store.getState().auth.token;
  const typeToken = await store.getState().auth.typeToken;

  config.baseURL = url;
  if (token) {
    config.headers.Authorization = `${typeToken} ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosClient;
