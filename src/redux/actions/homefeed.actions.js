import axios from 'axios';
import {reduxHelper} from '../utils/redux-helper';
import {FETCH_REDDIT_POSTS} from './types';

const fetchPostsRequest = () => {
  return {
    type: reduxHelper(FETCH_REDDIT_POSTS).actionRequest,
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: reduxHelper(FETCH_REDDIT_POSTS).actionSuccess,
    payload: data?.children,
    after: data?.after,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: reduxHelper(FETCH_REDDIT_POSTS).actionFailure,
    payload: error,
  };
};

const fetchData = (token) => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get('https://oauth.reddit.com/r/python/hot', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchPostsSuccess(res?.data?.data));
      })
      .catch((error) => {
        dispatch(fetchPostsFailed(error));
      });
  };
};

export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess, fetchData};
