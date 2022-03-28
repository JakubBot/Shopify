import initialState from './initialState';
import types from '../actions/actionTypes';
const userReducer = (state = initialState.user, action) => {
  let user = {
    name: '',
    email: '',
    token: '',
  };
  switch (action.type) {
    case types.SAVE_USER: {
      return { ...state, ...action.payload };
    }
    case types.LOG_OUT_USER: {
      return { ...initialState.user };
    }
    default:
      return state;
  }
};

export default userReducer;
