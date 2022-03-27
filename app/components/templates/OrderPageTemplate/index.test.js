import React from 'react';
import OrderPageTemplate from './index';
import renderWithRedux from 'components/mocks/renderWithRedux';

let mockProduct = {
  name: 'Buckle Bunny',
  slug: 'buckle-bunny',
  image: '/products/buckleBunny.webp',
  price: 4.99,
  isFeatured: false,
  id: 1,
  quantity: 1
};

const initialState = {
  products: [mockProduct],
  user: {
    name: '',
    email: '',
    token: '',
  },
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
  },
};

it('Should render a product', () => {
  const { getByLabelText, ...tree } = renderWithRedux(<OrderPageTemplate />, {
    initialState,
  });
  let list = getByLabelText(/products/i);

  expect(list).toContainHTML(
   `<ol aria-label="products" class="productList"><li class="product"><span class="productCell">${mockProduct.name}</span><span class="productCell">${mockProduct.price}$</span><span class="productCell alignCenter">${mockProduct.quantity}</span></li></ol>`
  );
  expect(tree).toMatchSnapshot();
});

  /*
   <ol aria-label="products" class="productList">
    <li key={mockProduct.id} class="product">
     <span class="productCell">{mockProduct.name}</span>
       <span class="productCell">{mockProduct.price}$</span>
     <span class='productCell alignCenter'>{mockProduct.quantity}</span>
     </li> 
   </ol>
*/
