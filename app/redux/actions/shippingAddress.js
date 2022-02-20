import types from './actionTypes';
export function saveShippingAddress(address) {
  return {
    type: types.SAVE_SHIPPING_ADDRESS,
    payload: address,
  };
}
