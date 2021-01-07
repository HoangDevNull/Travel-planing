import reducer from './reducers';
import * as types from './types';
import { post as postAction, createPost as createPostAction } from './actions';
import postSaga from './sagas';

export { types, postSaga, postAction, createPostAction };

export default reducer;
