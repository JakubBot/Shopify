import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
const defaultInitialState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
  products: [],
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
  },
};

function defaultReducer(state = defaultInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  { reducer = defaultReducer, initialState = defaultInitialState } = {}
) {
  const store = createStore(reducer, initialState);

  return render(<Provider store={store}>{component}</Provider>);
}

export default renderWithRedux;
