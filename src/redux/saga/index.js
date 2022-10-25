import {all, fork} from 'redux-saga/effects';
import PostsSaga from 'redux/saga/posts.saga';
import ProfileSaga from 'redux/saga/profile.saga';

const rootSaga = function* () {
  yield all([fork(PostsSaga)]);
  yield all([fork(ProfileSaga)]);
};
export default rootSaga;
