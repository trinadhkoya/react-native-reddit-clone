import {authorize} from 'react-native-app-auth';
import {config} from 'services/reddit.service';
import {ACCESS_TOKEN, storage} from 'utils/storage.utils';
import {reduxHelper} from 'redux/utils/redux-helper';
import {USER_LOGIN, USER_LOGOUT} from 'redux/actions/types';

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

const onLogin = async () => {
  const token = await authorize(config);
  storage.set(ACCESS_TOKEN, token.accessToken);
};

export {userLogin, userLogout, handleLogin, handleLogout};
