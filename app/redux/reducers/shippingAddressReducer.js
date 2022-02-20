import initialState from './initialState';
import types from '../actions/actionTypes';
const userReducer = (state = initialState.shippingAddress, action) => {
  switch (action.type) {
    case types.SAVE_SHIPPING_ADDRESS: {
      return { ...state,  ...action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
