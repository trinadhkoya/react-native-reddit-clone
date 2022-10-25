import {FETCH_POSTS} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helper';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
  after: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxHelper(FETCH_POSTS).actionRequest:
      return {
        ...state,
        isLoading: true,
      };
    case reduxHelper(FETCH_POSTS).actionSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        after: action.after,
        error: '',
      };
    case reduxHelper(FETCH_POSTS).actionFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
