import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import Image from 'next/image';

const ProductPage = ({ product }) => {
  return (
    <>
      <div className={styles.productContainer}>
        <Header />

        <div className={styles.product}>
          <div className={styles.imgContainer}>
            <span className={styles.imgNumber}>1</span>
            <Image
              width={500}
              height={600}
              layout="responsive"
              alt="product img"
              src={product.image}
            />
          </div>
          <div className={styles.description}>
            <div className={styles.title}>
              <h3>Coconut Water</h3>
            </div>
            <div className={styles.subTitle}>
              <p>sssssssssssssssssssssssssss</p>
              <p>sssssssssssssssssss</p>
            </div>
            <div className={styles.free}>
              <p>Glutamin free</p>
            </div>
            <div className={styles.productButtonContainer}>
              <div className={styles.productButtonDetails}>
                <span className={styles.buttonIncrement}>-</span>
                <button className={styles.counter}>1</button>
                <span className={styles.buttonDecrement}>+</span>
              </div>
              <div className={styles.productPr}>
                <h4>$19.99</h4>
              </div>
            </div>
            <button className={styles.addToCart}>Add to cart</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
