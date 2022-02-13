import HomePage from '@template/HomePage';
import Product from 'models/Product'

import db from 'utils/db'

function Home({newProducts}) {
  return (
    <>
        <HomePage newProducts={newProducts} />
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
