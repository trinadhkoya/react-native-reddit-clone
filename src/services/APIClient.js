import {storage} from 'utils/storage.utils';

const axios = require('axios');

const BASE_URL = 'https://oauth.reddit.com/';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json',
};

const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosApi.interceptors.request.use((config) => {
  const token = storage.getString('ACCESS_TOKEN');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export const get = async (url, config) =>
  await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response?.data);
