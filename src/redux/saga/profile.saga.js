import {call, put, takeLatest} from 'redux-saga/effects';
import {FETCH_USER_INFO} from 'redux/actions/actionTypes';
import {reduxHelper} from 'redux/utils/redux-helper';
import {fetchProfileFailed, fetchProfileSuccess,} from 'redux/actions/profile.actions';
import {getProfileInfo} from 'services/profile.service';

function* onGetProfile() {
  try {
    const response = yield call(getProfileInfo);
    yield put(fetchProfileSuccess(response));
  } catch (error) {
    yield put(fetchProfileFailed(error.response));
  }
}

function* ProfileSaga() {
  yield takeLatest(reduxHelper(FETCH_USER_INFO).actionRequest, onGetProfile);
}

export default ProfileSaga;
