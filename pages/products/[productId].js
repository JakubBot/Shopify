import db from '@util/db';
import Product from 'models/Product';
import ProductPageTemplate from '@template/ProductPage';
import BasicLayout from '@layout/BasicLayout';

const ProductPage = ({ product }) => {

  return (
    <>
      <BasicLayout title={`Shopify - ${product.name}`} positionCartIcon="right">
        <ProductPageTemplate product={product} />
      </BasicLayout>
    </>
  );
};



export async function getServerSideProps(context) {
  const {
    params: { productId },
  } = context;
  db.connect();
  const product = await Product.findOne({ slug: productId }).lean();
  db.disconnect();

  return {
    props: {
      product: db.convertToObj(product),
    },
  };
}

export default ProductPage;
