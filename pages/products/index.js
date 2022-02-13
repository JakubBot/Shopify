import ProductsPage from '@template/ProductsPage';
import db from '@util/db';
import Product from 'models/Product';

const Products = ({ products }) => {
  return (
    <>
      <ProductsPage products={products} />
    </>
  );
};

export async function getStaticProps() {
  db.connect();
  const products = await Product.find({ isFeatured: false }).lean();
  products[0].isFirst = true;
  products[products.length - 1].isLast = true
  db.disconnect();

  return {
    props: {
      products: products.map(db.convertToObj),
    },
    revalidate: 60,
  };
}

export default Products;
