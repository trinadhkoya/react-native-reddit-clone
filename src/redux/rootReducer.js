import {loginReducer, mainFeedReducer} from './reducer';
import {combineReducers} from 'redux';
import profileReducer from './reducer/profile.reducer';

const rootReducer = combineReducers({
  homeFeed: mainFeedReducer,
  login: loginReducer,
  profile: profileReducer,
});

export default rootReducer;
