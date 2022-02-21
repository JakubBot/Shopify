import { combineReducers } from 'redux';

import user from './userReducer';
import products from './productsReducer';
import shippingAddress from './shippingAddressReducer';

const rootReducer = combineReducers({
  user,
  products,
  shippingAddress
});

export default rootReducer;
