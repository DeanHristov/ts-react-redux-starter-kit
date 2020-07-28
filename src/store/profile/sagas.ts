import {all, fork, put, takeLatest} from "redux-saga/effects"

import {IProfileAction, ProfileActionTypes} from "@store/profile/types";
import Auth from '@core/Auth';
import Utils from "@core/Utils";

/**
 * The purpose of this worker is just to simulate login process with a few delay.
 * The all logIn inside the generator is static that means it cannot be part of real use-case
 */
function* workerAsyncLogInWithDelay(action: IProfileAction) {
  yield Utils.doDelay(1000);
  yield Auth.login(action.payload);

  yield put({type: ProfileActionTypes.PROFILE_SIGN_IN_SUCCESS, payload: Auth.credentials});

  // TODO ProfileActionTypes.PROFILE_SIGN_IN_FAILURE
}

function* watchToLogIn() {
  yield takeLatest(ProfileActionTypes.PROFILE_SIGN_IN_REQUEST, workerAsyncLogInWithDelay);
}

function* workerAsyncLogoutWithDelay(action: IProfileAction) {
  yield Utils.doDelay(1000);
  yield Auth.logout();

  yield put({type: ProfileActionTypes.PROFILE_SIGN_OUT_SUCCESS, payload: Auth.credentials})
}

function* watchToLogOut() {
  yield takeLatest(ProfileActionTypes.PROFILE_SIGN_OUT_REQUEST, workerAsyncLogoutWithDelay);
}

export default function* rootProfileSaga() {
  yield all([
    fork(watchToLogIn),
    fork(watchToLogOut)
  ])
}
