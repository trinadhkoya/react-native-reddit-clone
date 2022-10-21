export const BASE_URL = 'https://www.reddit.com/api/v1/';
const OAUTH2_REDIRECT = 'com.redditech://oauth2redirect/reddit';
const REDDIT_CLIENT_SECRET = 'fcafYt6_OhrlQEN6NTTyUQ';
export const BASE_URL2 = 'https://www.reddit.com/api/v1/';

const config = {
  redirectUrl: OAUTH2_REDIRECT,
  clientId: REDDIT_CLIENT_SECRET,
  clientSecret: '',
  scopes: [
    'identity',
    'edit',
    'subscribe',
    'save',
    'submit',
    'read',
    'modconfig',
    'account',
    'vote',
    'flair',
    'mysubreddits',
    'modposts',
  ],
  serviceConfiguration: {
    authorizationEndpoint: `${BASE_URL}authorize.compact`,
    tokenEndpoint: `${BASE_URL}access_token`,
  },
  customHeaders: {
    token: {
      Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ',
    },
  },
};

export {config};
