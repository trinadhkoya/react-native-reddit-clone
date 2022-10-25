import {get} from './APIClient';

export const getProfileInfo = () => get('api/v1/me');
