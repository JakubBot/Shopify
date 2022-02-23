import wrapper from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/base/_base.scss';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate loading={null} persistor={store.__persistor}>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
