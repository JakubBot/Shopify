import Header from '@element/Header';
import SocialIcons from '@element/SocialIcons';
import Product from '@element/Product';

const Products = ({ product }) => {
  
  return (
    <>
      <SocialIcons />

      {product.isFirst && <Header />}
      <Product product={product} />
    </>
  );
};

export default Products;
