import initialState from './initialState';
import types from '../actions/actionTypes';
const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case types.SAVE_NAME: {
      console.log(action.name);
      return { ...state, name: action.name };
    }
    default:
      return state;
  }
};

export default userReducer;
