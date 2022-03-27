import React from 'react';
import LoginPage from './index';
import { Provider } from 'react-redux';
import { render, cleanup,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';

afterEach(cleanup);
const initialState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
};

function reducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SAVE_USER': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

function renderWithRedux(component) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}
it('s', () => {
  const { getByTestId,getByRole } = renderWithRedux(<LoginPage />);
  let form = getByRole('form')
  fireEvent.submit(form)
  
});
