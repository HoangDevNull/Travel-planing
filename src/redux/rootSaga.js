import { all, fork } from 'redux-saga/effects';

import { sampleSaga } from './sample';
import { themeSaga } from './theme';

export default function* () {
  yield all([fork(sampleSaga), fork(themeSaga)]);
}
