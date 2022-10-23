import {FETCH_USER_INFO} from 'redux/actions/types';
import {reduxHelper} from 'redux/utils/redux-helper';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export default (state = initialState, action) => {
  if (action.type === reduxHelper(FETCH_USER_INFO).actionRequest) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === reduxHelper(FETCH_USER_INFO).actionSuccess) {
    return {
      ...state,
      isLoading: false,
      data: action.payload,
    };
  } else if (action.type === reduxHelper(FETCH_USER_INFO).actionFailure) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  } else {
    return state;
  }
};
