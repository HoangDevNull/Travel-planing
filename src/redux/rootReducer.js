import { combineReducers } from 'redux';

import sample from './sample';
import theme from './theme';
import sidebar from './sidebar';
import auth from './auth';

const rootReducer = combineReducers({
  sample,
  theme,
  sidebar,
  auth
});

export default rootReducer;
