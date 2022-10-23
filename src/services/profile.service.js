import {HTTPClient as API} from './HTTPClient';

export default {
  getProfile: () =>
    API.get('api/v1/me').then((res) => {
      return res && res.data;
    }),
};
