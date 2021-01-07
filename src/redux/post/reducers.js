import { POST, CREATE_POST } from './types';
const initState = {
  currentPost: null,
  previewPost: null,
  error: null
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case POST.SUCCESS:
      return {
        ...state
      };
    case CREATE_POST.SUCCESS:
      return {
        ...state,
        previewPost: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;
