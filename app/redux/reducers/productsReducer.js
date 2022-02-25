import initialState from './initialState';
import types from '../actions/actionTypes';

const productsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      const newProduct = action.payload;
      const productExist = state.find(
        (product) => product.name == newProduct.name
      );
      console.log(productExist);
      if (productExist) {
        productExist.quantity += newProduct.quantity;
        return [...state];
      } else {
        return [...state, newProduct];
      }
    }
    case types.DELETE_PRODUCT: {
      const deleteProduct = action.payload;
      const newProducts = state.filter(
        (product) => product.id !== deleteProduct.id
      );
      return [...newProducts];
    }
    case types.CLEAR_CART: {
      return [];
    }
    default:
      return state;
  }
};

export default productsReducer;
