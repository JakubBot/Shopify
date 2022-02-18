import initialState from './initialState';
import types from '../actions/actionTypes';

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default productsReducer;
