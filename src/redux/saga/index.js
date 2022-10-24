import {all, fork} from 'redux-saga/effects';
import postsSaga from 'redux/saga/posts.saga';

export default function* rootSaga() {
  yield all([fork(postsSaga)]);
}
