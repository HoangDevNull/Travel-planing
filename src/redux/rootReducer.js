import { combineReducers } from 'redux';

import sample from './sample';
import theme from './theme';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  sample,
  theme,
  sidebar
});

export default rootReducer;
