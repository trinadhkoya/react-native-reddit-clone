import {reduxHelper} from '../utils/redux-helper';
import {FETCH_USER_INFO} from './types';
import {RedditAPIClient} from '../../services/reddit-a-p-i-client';

const fetchProfileRequest = () => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionRequest,
  };
};

const fetchProfileSuccess = (res) => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionSuccess,
    payload: res,
  };
};

const fetchProfileFailed = (error) => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionFailure,
    payload: error,
  };
};

const getProfile = () => {
  return (dispatch) => {
    dispatch(fetchProfileRequest());
    RedditAPIClient.get('api/v1/me')
      .then((res) => {
        dispatch(fetchProfileSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchProfileFailed(error));
      });
  };
};

export {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailed,
  getProfile,
};
