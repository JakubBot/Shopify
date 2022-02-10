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
    <>
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
              console.log(image.image);
              return (
                <div key={image._id} className={styles.productContainer}>
                  <button
                    type="button"
                    className={styles.productContainerButton}
                  >
                    <Link href={image.slug}>
                      <a>Read more</a>
                    </Link>
                  </button>
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
    </>
  );
};

export default OurProductsSlider;
