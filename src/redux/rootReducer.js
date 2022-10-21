import {loginReducer, mainFeedReducer} from './reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  homeFeed: mainFeedReducer,
  login: loginReducer,
});

export default rootReducer;
