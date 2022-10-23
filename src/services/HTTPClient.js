const axios = require('axios');
import {storage} from 'utils/storage.utils';

const BASE_URL = 'https://oauth.reddit.com/';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Accept': 'application/json',
};

const HTTPClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

HTTPClient.interceptors.request.use(config => {
  const token = storage.getString('ACCESS_TOKEN');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
HTTPClient.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let res = error.response;
    if (res.status === 401) {
      //TODO: If we define app reducer, we can display error state
    }
    console.error(`Looks like there was a problem. Status Code:` + res.status);
    return Promise.reject(error);
  },
);


export {HTTPClient};
