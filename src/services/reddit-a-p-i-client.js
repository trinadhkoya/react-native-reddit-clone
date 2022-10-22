import {storage} from '../utils/storage';

const axios = require('axios');
const BASE_URL = 'https://oauth.reddit.com/';

const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Accept': 'application/json',
};


const RedditAPIClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

RedditAPIClient.interceptors.request.use(config => {
  const token = storage.getString('ACCESS_TOKEN');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
RedditAPIClient.interceptors.response.use(
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


export {RedditAPIClient};
