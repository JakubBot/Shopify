import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import AboutUs from '@module/AboutUs';
import Contact from '@module/Contact'
import styles from './index.module.scss';
import { useEffect, useRef } from 'react';
import SnapScrollingGsap from './SnapScrollingGsap';


const HomePage = ({ newProducts }) => {
  const containerRef = useRef();
  useEffect(() => {
    SnapScrollingGsap(containerRef);
  }, []);
  return (
    <div ref={containerRef} className={styles.homeContainer}>
      <section className={styles.section}>
        <HomeWelcome />
      </section>
      <section className={styles.section}>
        <OurProductsSlider newProducts={newProducts} />
      </section>
      <section className={styles.section}>
        <AboutUs />
      </section>
      <section className={styles.section}>
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
