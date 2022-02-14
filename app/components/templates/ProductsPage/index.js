import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import Products from '@module/Products';

import uniqid from 'uniqid';

const ProductsPage = ({ products }) => {
  const components = products.map((product, index) => {
    return <Products key={uniqid()} product={{ ...product, index }} />;
  });

  return (
    <SnapScrollingLayout positionCartIcon="right" components={components} />
  );
};

export default ProductsPage;
