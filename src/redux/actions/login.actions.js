import {USER_LOGIN, USER_LOGOUT} from './types';
import {reduxHelper} from '../utils/redux-helper';

const userLogin = (data) => ({
  type: reduxHelper(USER_LOGIN).actionSuccess,
  payload: data,
});

const userLogout = () => ({
  type: reduxHelper(USER_LOGOUT).actionSuccess,
});

const handleLogin = (data) => (dispatch) => {
  dispatch(userLogin(data));
};

const handleLogout = () => (dispatch) => {
  dispatch(userLogout());
};

export {userLogin, userLogout, handleLogin, handleLogout};
