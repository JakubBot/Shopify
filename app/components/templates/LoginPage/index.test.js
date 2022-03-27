import React from 'react';
import LoginPage from './index';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore } from 'redux';
import renderWithRedux from 'components/mocks/renderWithRedux';

const initialState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SAVE_USER': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(userReducer, initialState);

// function renderWithRedux(component) {
//   return <Provider store={store}>{component}</Provider>;
// }

it('Should change value of inputs', async () => {
  // const { getByLabelText } = render(renderWithRedux(<LoginPage />));
  const { getByLabelText } = renderWithRedux(<LoginPage />, {
    reducer: userReducer,
    initialState: initialState,
  });
  let email = getByLabelText('email');
  let password = getByLabelText('password');
  userEvent.type(email, 'bkuba1401@gmail.com');
  userEvent.type(password, '123123');

  expect(email.value).toEqual('bkuba1401@gmail.com');
  expect(password.value).toEqual('123123');
  // expect(tree).toMatchSnapshot()
});
