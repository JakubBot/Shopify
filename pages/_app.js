import wrapper from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

import 'styles/base/_base.scss';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
