import Link from 'next/link';
import Image from 'next/image';

import styles from './index.module.scss';
const Product = ({ product: { name, slug, image,isFirst,index }  }) => {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.productImg}>
          <div className={styles.img}>
            <span className={styles.productNumber}>.{index + 1}</span>

            <Image
              src={image}
              alt="coconut water"
              width={400}
              height={550}
              layout="responsive"
              priority={isFirst ? true : false}
            />
          </div>
          <h3 className={styles.productLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h3>
        </div>
        <div className={styles.productDescription}>
          <h2 className={styles.productTitle}>{name}</h2>
          <h4 className={styles.productSubTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu sem nulla.Phasellus eu sem nulla.
          </h4>

          <button className={styles.productButton}>
            <Link href={slug}>
              <a>Read more</a>
            </Link>
          </button>
        </div>
      </div>
    </div>
    // <div className={styles.productWrapper}>
    //   <div className={styles.productContainer}>
    //     <div className={styles.productImg}>
    //       <div className={styles.img}>
    //         <span className={styles.productNumber}>.1</span>

    //         <Image
    //           src="/products/coconutWater.webp"
    //           alt="coconut water"
    //           width={400}
    //           height={550}
    //           layout="responsive"
    //         />
    //       </div>
    //       <h3 className={styles.productLink}>
    //         <Link href="/">
    //           <a>Back to home</a>
    //         </Link>
    //       </h3>
    //     </div>
    //     <div className={styles.productDescription}>
    //       <h2 className={styles.productTitle}>Coconut Water</h2>
    //       <h4 className={styles.productSubTitle}>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
    //         eu sem nulla.Phasellus eu sem nulla.
    //       </h4>
    //       <button className={styles.productButton}>Read more</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Product;
