import types from './actionTypes';

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    payload: product,
  };
}

export function clearCart(product) {
  return {
    type: types.CLEAR_CART,
    payload: product,
  };
}
export function deleteProduct(product) {
  return {
    type: types.DELETE_PRODUCT,
    payload: product,
  };
}
