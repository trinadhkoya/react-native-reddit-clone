import {get} from './APIClient';

export default {
  getPosts: (query = 'SBU') => get(`r/${query}/new`),
};
