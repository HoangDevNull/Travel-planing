import reducer from './reducers';
import * as types from './types';
import { sidebar as sidebarAction } from './actions';
import sidebarSaga from './sagas';

export { types, sidebarSaga, sidebarAction };

export default reducer;
