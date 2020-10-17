import { put, takeEvery } from 'redux-saga/effects';
import { SIDEBAR } from './types';
import { sidebar } from './actions';

function* handleOpenSidebar({ isOpen }) {
  yield put(sidebar.setSidebar(isOpen));
}

export default function* watchTheme() {
  yield takeEvery(SIDEBAR.LOAD, handleOpenSidebar);
}
