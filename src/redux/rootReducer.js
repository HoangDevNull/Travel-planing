import { combineReducers } from 'redux';

import sample from './sample';
import theme from './theme';

const rootReducer = combineReducers({
  sample,
  theme
});

export default rootReducer;
