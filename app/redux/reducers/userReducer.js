import initialState from './initialState';
import types from '../actions/actionTypes';
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.SAVE_USER: {
      return { ...state,  ...action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
