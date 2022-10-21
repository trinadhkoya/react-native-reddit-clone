import {FETCH_REDDIT_POSTS} from '../actions/types';
import {reduxHelper} from '../utils/redux-helper';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reduxHelper(FETCH_REDDIT_POSTS).actionRequest:
      return {
        ...state,
        loading: true,
      };
    case reduxHelper(FETCH_REDDIT_POSTS).actionSuccess:
      return {
        ...state,
        loading: false,
        data: action.payload,
        after: action.after,
        error: '',
      };
    case reduxHelper(FETCH_REDDIT_POSTS).actionFailure:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
