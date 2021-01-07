import { takeLatest, put, call } from 'redux-saga/effects';
import { POST } from './types';
import { post } from './actions';
import { request, ROOT_API } from 'utils/apiRequest';

function* handleFetchPost(action) {
  try {
    const { payload } = action;
    // fetch sample list from api
    const { data, status } = yield call(
      request,
      `${ROOT_API}/post/${payload.id}`,
      'GET'
    );

    // call fail -> throw new error in catch function
    if (status >= 400) {
      throw new Error(data.errors);
    }

    yield put(post.set(data));
  } catch (err) {
    yield put(post.setError(err.toString()));
  }
}

export default function* watchSample() {
  yield takeLatest(POST.LOAD, handleFetchPost);
}
