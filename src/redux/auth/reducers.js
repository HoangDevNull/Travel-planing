import { LOGIN, LOGOUT } from './types';

import { getCookie } from 'utils/cookies';
let initState = {};
const authCookie = getCookie('auth');
if (authCookie) {
  initState = JSON.parse(decodeURIComponent(authCookie));
} else {
  initState = {
    access_token: null,
    isLoggedIn: false,
    userProfile: null,
    error: null
  };
}


initState.loading = false;
initState.error = null;

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN.LOAD:
      return {
        ...state,
        loading: true
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
        error: null
      };
    case LOGOUT.SUCCESS:
      return initState;
    case LOGIN.ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
