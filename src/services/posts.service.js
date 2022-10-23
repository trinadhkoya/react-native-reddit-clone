import {HTTPClient as API} from './HTTPClient';

export default {
  getPosts: (query = 'SBU') =>
    API.get(`r/${query}/new`).then((res) => {
      return res?.data;
    }),
};
