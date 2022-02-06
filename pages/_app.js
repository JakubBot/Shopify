// import '../styles/globals.css'
import wrapper from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useStore } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
