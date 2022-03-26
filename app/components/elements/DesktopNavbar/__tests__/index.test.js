import React from 'react';
import { screen, render } from '@testing-library/react';
import DesktopNavbar from '../index';

it('should render', () => {
 render(<DesktopNavbar />);
  const link = screen.getByText('Our products');
  expect(link).toBeInTheDocument();
});
