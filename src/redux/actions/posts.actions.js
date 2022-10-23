import {reduxHelper} from 'redux/utils/redux-helper';
import {FETCH_POSTS} from 'redux/actions/types';
import PostsService from 'services/posts.service';

const fetchPostsRequest = () => {
  return {
    type: reduxHelper(FETCH_POSTS).actionRequest,
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


const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const res = await PostsService.getPosts();
    dispatch(fetchPostsSuccess(res.data));
  } catch (err) {
    dispatch(fetchPostsFailed(err));
  }
};


export {fetchPostsFailed, fetchPostsRequest, fetchPostsSuccess, fetchPosts};
