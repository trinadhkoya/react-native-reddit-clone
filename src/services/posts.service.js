import {HTTPClient as API} from './HTTPClient';

export default {
  getPosts: () =>
    API.get('r/SBU/new').then((res) => {
      return res?.data;
    }),
};
