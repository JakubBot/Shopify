import db from '@util/db';
import Product from 'models/Product';

const ProductPage = ({ product }) => {
  console.log(product);
  return <>s</>;
};

export async function getStaticPaths() {
  db.connect();
  const products = await Product.find({ isFeatured: false }).limit(3);
  let popularProductSlug = products.map((product) => product.slug);
  db.disconnect();

  const createParams = popularProductSlug.map((slug) => {
    return {
      params: { productId: slug },
    };
  });
  return {
    paths: [...createParams],
    fallback: false, // false or 'blocking'
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
