import {reduxHelper} from '../utils/redux-helper';
import {FETCH_USER_INFO} from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxHelper(FETCH_USER_INFO).actionRequest:
      return {
        ...state,
        loading: true,
      };
    case reduxHelper(FETCH_USER_INFO).actionSuccess:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case reduxHelper(FETCH_USER_INFO).actionFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
