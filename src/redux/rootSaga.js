import { all, fork } from "redux-saga/effects";

import { sampleSaga } from "./sample";

export default function* () {
  yield all([
    fork(sampleSaga)]);
}
