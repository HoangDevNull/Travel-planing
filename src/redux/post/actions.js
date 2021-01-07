import createAction from 'utils/createActions';

import { POST, CREATE_POST } from './types';

export const post = {
  load: () => {
    return createAction(POST.LOAD);
  },
  set: (payload) => {
    return createAction(POST.SUCCESS, { payload });
  },
  setError: (error) => {
    return createAction(POST.ERROR, error);
  }
};
export const createPost = {
  load: () => {
    return createAction(CREATE_POST.LOAD);
  },
  set: (payload) => {
    return createAction(CREATE_POST.SUCCESS, { payload });
  },
  setError: (error) => {
    return createAction(CREATE_POST.ERROR, error);
  }
};
