import WavyImage from '@element/WavyImage';
import { useEffect } from 'react';
import CircleType from 'circletype';
import { gsap } from 'gsap';
import Link from 'next/link';
import styles from './index.module.scss';

const HomePage = () => {
  useEffect(() => {
    const circleText = document.getElementById('circleText');
    const circleType = new CircleType(circleText);
    circleType.radius(22).dir(1);

    gsap.to(circleText, {
      rotate: 360,
      repeat: -1,
      duration: 8,
      ease: 'none',
    });
  }, []);
  return (
    <>
    
    <section className={styles.section}>

    <div className={styles.wavyImageContainter}>
      <WavyImage />

      <h3 className={styles.wavyImageTitle}>Welcome in SHOPIFY</h3>
      <h4 className={styles.circleText} id="circleText">
        Discounts Discounts{' '}
      </h4>
      <div className={styles.goProducts}>
        <Link href="/products">
          <a>
            <h3 className={styles.goProductsLink}>Go to products</h3>
          </a>
        </Link>
      </div>
      asddsa
    </div>
    </section>
  <section className={styles.section}>

  </section>
  </>

  );
};

export default HomePage;
