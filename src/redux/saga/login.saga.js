import {put, takeLatest} from 'redux-saga/effects';
import {USER_LOGIN} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helper';
import {userLogin} from "redux/actions/login.actions";

function* onLoginRequest({payload}) {
  try {
    yield put(userLogin(payload.data));
  } catch (error) {
    // yield put(fetchPostsFailed(error.response));
  }
}

function* LoginSaga() {
  yield takeLatest(reduxHelper(USER_LOGIN).actionSuccess, onLoginRequest);
}

export default LoginSaga;
