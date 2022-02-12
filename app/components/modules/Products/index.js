import Header from '@element/Header';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from '@element/SocialIcons';

const Products = () => {
  return (
    <>
      <SocialIcons />
      <Header />

      <div className={styles.productWrapper}>
        <div className={styles.productContainer}>
          <div className={styles.productImg}>
            <div className={styles.img}>
              <span className={styles.productNumber}>.1</span>

              <Image
                src="/products/coconutWater.webp"
                alt="coconut water"
                width={400}
                height={550}
                layout="responsive"
              />
            </div>
            <h3 className={styles.productLink}>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h3>
          </div>
          <div className={styles.productDescription}>
            <h2 className={styles.productTitle}>Coconut Water</h2>
            <h4 className={styles.productSubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              eu sem nulla.Phasellus eu sem nulla.
            </h4>
            <button className={styles.productButton}>Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
