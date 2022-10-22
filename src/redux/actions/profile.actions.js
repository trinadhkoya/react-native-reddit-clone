import {reduxHelper} from '../utils/redux-helper';
import {FETCH_USER_INFO} from './types';
import ProfileServices from '../../services/profile.service';

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



const getProfile = () => async (dispatch) => {
  dispatch(fetchProfileRequest());
  try {
    const res = await ProfileServices.getProfile();
    dispatch(fetchProfileSuccess(res));
  } catch (err) {
    dispatch(fetchProfileFailed(err));
  }
};



export {
  fetchProfileRequest,
  fetchProfileSuccess,
  fetchProfileFailed,
  getProfile,
};
