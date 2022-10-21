import {reduxHelper} from '../utils/redux-helper';
import {FETCH_USER_INFO} from './types';
import axios from 'axios';

const fetchProfileRequest = () => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionRequest,
  };
};

const fetchProfileSuccess = (data) => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionSuccess,
    payload: data,
  };
};

const fetchProfileFailed = (error) => {
  return {
    type: reduxHelper(FETCH_USER_INFO).actionFailure,
    payload: error,
  };
};

const getProfile = (token) => {
  return (dispatch) => {
    dispatch(fetchProfileRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
