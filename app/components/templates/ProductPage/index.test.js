import userEvent from '@testing-library/user-event';
import ProductPage from './index';
import renderWithRedux from '../../mocks/renderWithRedux';

describe('changing product quantity', () => {
  let defaultQuantity = 1;

  let mockProduct = {
    name: 'Buckle Bunny',
    slug: 'buckle-bunny',
    image: '/products/buckleBunny.webp',
    price: 4.99,
    isFeatured: false,
  };
  let { getByRole, getByText } = renderWithRedux(
    <ProductPage product={mockProduct} />
  );
  let button = getByRole('button', { name: /change quantity/i });
  let decreaseButton = getByText('-');
  let increseButton = getByText('+');

  it('should increse quantity', () => {
    userEvent.click(increseButton);

    expect(button.textContent).toBe(String(defaultQuantity + 1));
  });
  it('should be less than 1', () => {
    userEvent.click(decreaseButton);
    expect(Number(button.textContent)).not.toBeLessThan(1);
  });
});
