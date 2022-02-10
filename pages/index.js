import HomePage from '@template/HomePage';
import BasicLayout from '@layout/BasicLayout';
import Product from 'models/Product'

import db from 'utils/db'

function Home({newProducts}) {
  return (
    <>
      <BasicLayout description="">
        <HomePage newProducts={newProducts} />
      </BasicLayout>
    </>
  );
}


export async function getStaticProps() {

  await db.connect()
  let newProducts = await Product.find({isFeatured: true}).lean()
  await db.disconnect()
  return {
    props: {
      newProducts: newProducts.map(db.convertToObj)
    },
    revalidate: 60
  }
}


export default Home;
