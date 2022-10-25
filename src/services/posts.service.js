import {get} from './APIClient';

export const getPosts = (query = 'SBU') => get(`r/${query}/new`);
