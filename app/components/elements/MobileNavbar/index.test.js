import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MobileNavbar from './index';

it("check if onClick function fires", () => {
  let fn = jest.fn()
  render(<MobileNavbar onClick={fn} />)
  let item = screen.getAllByRole("listitem")
  userEvent.click(item[0])
  expect(fn).toHaveBeenCalled()
})