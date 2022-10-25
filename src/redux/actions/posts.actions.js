import {reduxHelper} from 'redux/utils/redux-helper';
import {FETCH_POSTS} from 'redux/actions/actionTypes';

const fetchPostsRequest = (query) => {
  return {
    type: reduxHelper(FETCH_POSTS).actionRequest,
    payload: query,
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: reduxHelper(FETCH_POSTS).actionSuccess,
    payload: data?.children,
    after: data?.after,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: reduxHelper(FETCH_POSTS).actionFailure,
    payload: error,
  };
};


export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess};
