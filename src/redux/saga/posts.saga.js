import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchPostsFailed,
  fetchPostsRequest,
  fetchPostsSuccess,
} from 'redux/actions/posts.actions';
import PostsService from 'services/posts.service';
import {FETCH_POSTS} from 'redux/actions/types';

function* onGetPosts({payload: id}) {
  yield put(fetchPostsRequest());
  try {
    const response = yield call(PostsService.getPosts(), id);
    yield put(fetchPostsSuccess(response));
  } catch (error) {
    yield put(fetchPostsFailed(error.response));
  }
}

function* PostsSaga() {
  yield takeLatest(FETCH_POSTS, onGetPosts);
}

export default PostsSaga;
