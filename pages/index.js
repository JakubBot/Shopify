import HomePage from '@template/HomePage';
import BasicLayout from '@layout/BasicLayout';
import db from 'utils/db'

function Home(props) {
  // console.log(props);
  return (
    <>
      <BasicLayout description="">
        <HomePage />
      </BasicLayout>
    </>
  );
}


export async function getServerSideProps(context) {

  await db.connect()
  await db.disconnect()

  return {
    props: {
      name: 'jakub'
    }
  }
}


export default Home;
