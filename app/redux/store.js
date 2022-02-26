import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from '@redux-devtools/extension/src/developmentOnly';
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
    composeWithDevTools()
  );

  store.__persistor = persistStore(store);

  return store;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const wrapper = createWrapper(makeStore, { debug: true });
export default wrapper;
