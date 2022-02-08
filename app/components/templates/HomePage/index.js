import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import styles from './index.module.scss';

const HomePage = (props) => {
  console.log(props);
  return (
    <>
      <section className={styles.section}>
        <HomeWelcome />
      </section>
      <section className={styles.section}>
        <OurProductsSlider />
      </section>
    </>
  );
};

export default HomePage;
