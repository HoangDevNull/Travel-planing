import { combineReducers } from 'redux';

import sample from './sample';
import theme from './theme';
import sidebar from './sidebar';
import auth from './auth';
import post from './post';

const rootReducer = combineReducers({
  sample,
  theme,
  sidebar,
  auth,
  post
});

export default rootReducer;
