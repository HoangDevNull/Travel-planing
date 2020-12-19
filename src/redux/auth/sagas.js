import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN } from './types';
import { loginAction } from './actions';

import { setCookie } from 'utils/cookies';

const userAccount = [
  {
    email: 'hoang@gmail.com',
    password: 'abcd1234',
    token: 'asdasc_asdawd.1.1605612438024.506642048',
    userProfile: {
      username: 'Hoang',
      avatar: 'https://material-ui.com/static/images/avatar/1.jpg'
    }
  },
  {
    email: 'trongnguyen@gmail.com',
    password: 'abcd1234',
    token: 'asdasc_asdawd.1.1605612438024.506642048',
    userProfile: {
      username: 'Trong',
      avatar: 'https://material-ui.com/static/images/avatar/2.jpg'
    }
  }
];

function* handleLogin(action) {
  try {
    const { payload } = action;
    const email = payload?.email;
    const password = payload?.password;

    const index = userAccount.findIndex(
      (item) => item.email === email && item.password === password
    );

    console.log(index);

    // call fail -> throw new error in catch function
    if (index === -1) {
      console.log('error');
      throw new Error('login failed');
    }

    const { userProfile, token: access_token } = userAccount[index];
    const authData = {
      isLoggedIn: true,
      access_token,
      userProfile
    };
    yield put(loginAction.setLogin(authData));
    setCookie('auth', authData);
  } catch (err) {
    const content = 'wrong-user-or-password';
    console.log(err);
    yield put(loginAction.setError(content));
  }
}

export default function* loginWatcher() {
  yield takeLatest(LOGIN.LOAD, handleLogin);
}
