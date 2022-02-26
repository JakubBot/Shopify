import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const makeStore = () => {
  let store = createStore(
    persistedReducer,
    composeWithDevToolsDevelopmentOnly()
  );

  store.__persistor = persistStore(store);

  return store;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
