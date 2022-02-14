import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

const OurProductsSlider = ({ newProducts }) => {
  const [width, setWidth] = useState(0);
  const carusel = useRef();
  useEffect(() => {
    setWidth(carusel.current.scrollWidth - carusel.current.offsetWidth);
  }, []);
  return (
    <div>
      <div className={styles.productSliderContainer}>
        <h2 className={styles.productTitle}>Our Products</h2>

        <div className={styles.productSlider} ref={carusel}>
          <h4 className={styles.productSliderTitle}> Products Galerry</h4>
          <motion.div
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: 'grabbing' }}
            drag="x"
            className={styles.productSliderinner}
          >
            {newProducts.map((image, index) => {
              return (
                <div key={image._id} className={styles.productContainer}>
                  <Link href={`/products/${image.slug}`}>
                    <a>
                      <button
                        type="button"
                        className={styles.productContainerButton}
                      >
                        Read more
                      </button>
                    </a>
                  </Link>
                  <Image
                    src={image.image}
                    alt=""
                    className={styles.productImage}
                    layout="responsive"
                    width={'100%'}
                    height={'100%'}
                    priority={index === 0 || index === 1 ? true : false}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className={styles.goProducts}>
        <Link href="/products">
          <a>
            <h3 className={styles.goProductsLink}>Full list of prodcuts</h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OurProductsSlider;
