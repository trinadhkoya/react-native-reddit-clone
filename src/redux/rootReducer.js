import {combineReducers} from 'redux';
import {loginReducer, mainFeedReducer} from 'redux/reducer';
import profileReducer from 'redux/reducer/profile.reducer';

const rootReducer = combineReducers({
  homeFeed: mainFeedReducer,
  login: loginReducer,
  profile: profileReducer,
});

export default rootReducer;
