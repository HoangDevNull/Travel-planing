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
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_3.png',
      country: 'Saint Petersburg, Russian Federation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque justo ac ante suscipit, vel ultricies ante sodales. In id justo ut libero mattis pulvinar. Duis et malesuada felis. Nulla a tincidunt nisl,'
    }
  },
  {
    email: 'trong@gmail.com',
    password: 'abcd1234',
    token: 'asdasc_asdawd.1.1605612438024.506642048',
    userProfile: {
      username: 'Trong',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_8.png',
      country: 'Saint Petersburg, Russian Federation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque justo ac ante suscipit, vel ultricies ante sodales. In id justo ut libero mattis pulvinar. Duis et malesuada felis. Nulla a tincidunt nisl,'
    }
  },
  {
    email: 'tham@gmail.com',
    password: 'abcd1234',
    token: 'asdasc_asdawd.1.1605612438024.506642048',
    userProfile: {
      username: 'tham',
      avatar:
        'https://react-material-kit.devias.io/static/images/avatars/avatar_6.png',
      country: 'Saint Petersburg, Russian Federation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque justo ac ante suscipit, vel ultricies ante sodales. In id justo ut libero mattis pulvinar. Duis et malesuada felis. Nulla a tincidunt nisl,'
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
