import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import Products from '@module/Products';

import uniqid from 'uniqid';

const ProductsPage = () => {
  const components = [<Products key={uniqid()} />];

  return <SnapScrollingLayout positionCartIcon="right" components={components} />;
};

export default ProductsPage;
