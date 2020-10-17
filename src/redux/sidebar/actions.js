import createAction from 'utils/createActions';

import { SIDEBAR } from './types';

export const sidebar = {
  loadSideBar: (isOpen) => {
    return createAction(SIDEBAR.LOAD, { isOpen });
  },
  setSidebar: (isOpen) => {
    return createAction(SIDEBAR.SUCCESS, { payload: isOpen });
  },
  setError: (error) => {
    return createAction(SIDEBAR.ERROR, error);
  }
};
