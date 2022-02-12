import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import Products from '@module/Products';

import uniqid from 'uniqid';

import styles from './index.module.scss';

const ProductsPage = () => {
  const components = [<Products key={uniqid()} />];

  return (
    <>
    <SnapScrollingLayout components={components} />
    </>
  )
};

export default ProductsPage;



