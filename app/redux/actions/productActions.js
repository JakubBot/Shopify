import types from './actionTypes'

export function addProduct(product) {
  return {
    type: types.ADD_PRODUCT,
    payload: product
  }

}

export function deleteProduct(product) {
  return {
    type: types.DELETE_PRODUCT,
    payload: product
  }

}

