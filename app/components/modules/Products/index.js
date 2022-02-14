import Header from '@element/Header';
import SocialIcons from '@element/SocialIcons';
import Product from '@element/Product';
import Footer from '@element/Footer';
const Products = ({ product }) => {
  return (
    <>
      <SocialIcons />

      {product.isFirst && <Header />}
      <Product product={product} />
      {product.isLast && <Footer />}
    </>
  );
};

export default Products;
