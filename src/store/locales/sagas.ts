import {all, fork, put, takeLatest} from 'redux-saga/effects';
import {ILocaleAction, LocalesActionTypes} from "@store/locales/types";
import i18n from '@constants/i18next.config';

function* workerChangeLocale (action: ILocaleAction) {
  yield i18n.changeLanguage(action.payload)
  yield put({
    type: LocalesActionTypes.LOCALES_CHANGED_LOCALE, payload: action.payload
  })
}

function* watcherChangeLocale () {
  yield takeLatest(LocalesActionTypes.LOCALES_CHANGE_LOCALE, workerChangeLocale);
}
export default function* rootLocales () {
  yield all([ fork(watcherChangeLocale) ])
}
