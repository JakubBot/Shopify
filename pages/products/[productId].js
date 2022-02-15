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

export async function getStaticPaths() {
  db.connect();
  const products = await Product.find({ isFeatured: false }).limit(3);
  const featuredProducts = await Product.find({ isFeatured: true }).limit(3);
  let allProducts = [...products, ...featuredProducts];
  let popularProductSlug = allProducts.map((product) => product.slug);
  db.disconnect();

  const createParams = popularProductSlug.map((slug) => {
    return {
      params: { productId: slug },
    };
  });
  return {
    paths: [...createParams],
    fallback: 'blocking', // false or 'blocking'
  };
}

export async function getStaticProps(context) {
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
