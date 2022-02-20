import { combineReducers } from 'redux';

import user from './userReducer';
import products from './productsReducer';
import address from './shippingAddressReducer';

const rootReducer = combineReducers({
  user,
  products,
  address
});

export default rootReducer;
