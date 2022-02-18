import types from './actionTypes'
export function addProduct(product) {

  return {
    type: types.ADD_PRODUCT,
    payload: product
  }

}