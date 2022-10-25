import {reduxHelper} from 'redux/utils/redux-helper';
import {FETCH_USER_INFO} from 'redux/actions/actionTypes';

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

export {fetchProfileRequest, fetchProfileSuccess, fetchProfileFailed};
