import {HTTPClient as API} from './HTTPClient';

export default {
  getPosts: () =>
    API.get('/r/videos/hot').then(res => {
      return res?.data;
    }),
};

