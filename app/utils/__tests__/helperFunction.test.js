import { totalPricesProducts } from '../helperFunctions';

let mockProducts = [
  {
    name: 'Cola',
    price: 6,
    quantity: 1,
  },
  {
    name: 'Hamburger',
    price: 14,
    quantity: 1,
  },
  {
    name: 'Pizza',
    price: 20,
    quantity: 1,
  },
];
it('should return total price of products', () => {
  let price = totalPricesProducts(mockProducts);

  expect(price).toEqual("40.00")
});
it('should return total price of products with diffrent quantity', () => {
  let cola = mockProducts.find((prod) => prod.name === 'Cola')
  cola.quantity = 2
  let price = totalPricesProducts(mockProducts);

  expect(price).toEqual("46.00")
});
