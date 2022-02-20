import Head from 'next/head';
import FloatedCartIcon from '@element/FloatedCartIcon';
const BasicLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title> {title ?? 'Shopify'}</title>
        <meta
          name="description"
          content={
            description ??
            'Shopify brings you the best food made of magnificient products'
          }
        ></meta>
      </Head>
      <FloatedCartIcon  />
      {children}
    </>
  );
};

export default BasicLayout;
