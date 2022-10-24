import {get} from './APIClient';

export default {
  getProfile: () => get('api/v1/me'),
};
