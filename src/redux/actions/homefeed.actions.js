import {reduxHelper} from '../utils/redux-helper';
import {FETCH_REDDIT_POSTS} from './types';
import {RedditAPIClient} from '../../services/reddit-a-p-i-client';

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

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    RedditAPIClient.get('/r/videos/hot')
      .then((res) => {
        dispatch(fetchPostsSuccess(res?.data?.data));
      })
      .catch((error) => {
        dispatch(fetchPostsFailed(error));
      });
  };
};

export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess, fetchPosts};
