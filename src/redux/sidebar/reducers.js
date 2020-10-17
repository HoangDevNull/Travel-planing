import { SIDEBAR } from './types';
const initState = {
  isOpen: false,
  error: null
};

const sidebarReducer = (state = initState, action) => {
  switch (action.type) {
    case SIDEBAR.SUCCESS:
      const isOpen = action.payload;
      return {
        ...state,
        isOpen
      };
    case SIDEBAR.ERROR:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default sidebarReducer;
