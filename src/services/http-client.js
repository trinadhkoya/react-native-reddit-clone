import axios from 'axios';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error && error.response && error.response.data);
  },
);
const HEADERS = {
  // 'Content-Type': 'application/json; charset=utf-8',
};

export function setAuthorization(token?: string) {
  HEADERS.Authorization = `Bearer ${token}`;
}
export function getAuthorization() {
  return HEADERS.Authorization;
}
export function revokeAuthorization() {
  delete HEADERS.Authorization;
}
export function getApi() {
  return 'https://www.reddit.com/api/v1';
}
const globalTimeout = 70 * 1000;

function validateStatus(resp = {}, opts = {}) {
  if (IS_UNAUTHORIZED(resp.status) && !opts.isExternal && !opts.isAuth) {
    throw new Error('Your session has expired. Please log in again.');
  }

  if (IS_SERVER_OFFLINE(resp.status) && !opts.isExternal) {
    throw new Error('The Server is down for maintenance.');
  }

  if (!IS_SUCCESS(resp.status)) {
    throw resp;
  }
}

const IS_SUCCESS = (status) => status >= 200 && status < 300;
const IS_UNAUTHORIZED = (status) => status === 401;
const IS_SERVER_OFFLINE = (status) => status === 503;

export const internals = {
  IS_SUCCESS,
  IS_UNAUTHORIZED,
  IS_SERVER_OFFLINE,
  validateStatus,
};

// export function get({url, headers = {}, options = {}}) {
//   return new Promise((resolve, reject) => {
//     axios
//       .request({
//         method: 'get',
//         headers: HEADERS,
//         baseURL: getApi(),
//         url: url,
//         timeout: globalTimeout,
//       })
//       .then((response) => {
//         // internals.validateStatus(response);
//         resolve(response.data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }

const HTTPClient = axios.create({
  baseURL: 'https://oauth.reddit.com/api/v1',
  headers: HEADERS,
});

export {HTTPClient};
