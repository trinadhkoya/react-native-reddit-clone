import {reduxHelper} from 'redux/utils/redux-helper';
import {USER_LOGIN, USER_LOGOUT} from 'redux/actions/actionTypes';

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

// const onLogin = async () => {
//   const token = await authorize(config);
//   storage.set(ACCESS_TOKEN, token.accessToken);
// };

export {userLogin, userLogout, handleLogin, handleLogout};
