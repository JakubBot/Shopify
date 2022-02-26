import { createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const makeStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  let store = createStore(persistedReducer, composeEnhancers());

  store.__persistor = persistStore(store);

  return store;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
