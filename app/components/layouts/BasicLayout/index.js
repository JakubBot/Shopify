import Head from 'next/head';
import Header from 'components/modules/Header'

const BasicLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title> {title ?? 'Shopify'}</title>
        <meta name="description" content={description ?? 'Shopify brings you the best food made of magnificient products'}></meta>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default BasicLayout;