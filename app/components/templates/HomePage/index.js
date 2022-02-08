import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import styles from './index.module.scss';

const HomePage = ({ newProducts }) => {
  return (
    <>
      <section className={styles.section}>
        <HomeWelcome />
      </section>
      <section className={styles.section}>
        <OurProductsSlider newProducts={newProducts} />
      </section>
    </>
  );
};

export default HomePage;
