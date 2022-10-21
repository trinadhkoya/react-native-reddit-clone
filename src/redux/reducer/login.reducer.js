import {reduxHelper} from '../utils/redux-helper';
import {USER_LOGIN, USER_LOGOUT} from '../actions/types';

const initialState = {
  isLoggedIn: false,
  accessToken: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxHelper(USER_LOGIN).actionSuccess:
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.payload,
      };
    case reduxHelper(USER_LOGOUT).actionSuccess:
      return {
        ...state,
        isLoggedIn: false,
        accessToken: '',
      };
    default:
      return state;
  }
};
