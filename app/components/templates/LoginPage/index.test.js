import React from 'react';
import LoginPage from './index';
import userEvent from '@testing-library/user-event';
import renderWithRedux from 'components/mocks/renderWithRedux';

it('Should change value of inputs', async () => {
  const { getByLabelText } = renderWithRedux(<LoginPage />);
  let email = getByLabelText('email');
  let password = getByLabelText('password');
  userEvent.type(email, 'bkuba1401@gmail.com');
  userEvent.type(password, '123123');

  expect(email.value).toEqual('bkuba1401@gmail.com');
  expect(password.value).toEqual('123123');
});
