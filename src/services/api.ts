import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { getToken } from './token';
import { BASE_URL, API_TIMEOUT } from '../const';

const Default = {
  BaseUrl: BASE_URL,
  Timeout: API_TIMEOUT,
} as const;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number,
  });
  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });
  return api;
};
