import {USER_LOGIN, USER_LOGOUT} from './types';
import {reduxHelper} from '../utils/redux-helper';

const userLogin = (data) => {
  return {
    type: reduxHelper(USER_LOGIN).actionSuccess,
    payload: data,
  };
};

const userLogout = () => {
  return {
    type: reduxHelper(USER_LOGOUT).actionSuccess,
  };
};

const handleLogin = (data) => {
  return (dispatch) => {
    dispatch(userLogin(data));
  };
};

const handleLogout = () => {
  return (dispatch) => {
    dispatch(userLogout());
  };
};

export {userLogin, userLogout, handleLogin, handleLogout};
