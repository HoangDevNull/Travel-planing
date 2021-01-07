import { all, fork } from 'redux-saga/effects';

import { sampleSaga } from './sample';
import { themeSaga } from './theme';
import { sidebarSaga } from './sidebar';
import { authSaga } from './auth';
import { postSaga } from './post';

export default function* () {
  yield all([
    fork(sampleSaga),
    fork(themeSaga),
    fork(sidebarSaga),
    fork(authSaga),
    fork(postSaga)
  ]);
}
