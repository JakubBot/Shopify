import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { connect } from 'react-redux';
import * as productActions from '@redux/actions/productActions';
import { useRouter } from 'next/router';
import uniqid from 'uniqid';
import Link from 'next/link'

const ProductPage = ({ product, addProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const router = useRouter();

  const addProducts = () => {
    const { name, price } = product;
    addProduct({
      name,
      price,
      quantity,
      id: uniqid(),
    });

    router.push('/products');
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
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
            <h3 className={styles.productLink}>
              <Link href="/">
                <a>Back to home</a>
              </Link>
            </h3>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>
              <h3>{product.name}</h3>
            </div>
            <div className={styles.subTitle}>
              <p>Lorem ipsum ame,</p>
              <p>consectetur elit</p>
            </div>
         

            <div className={styles.productButtonContainer}>
              <div className={styles.productButtonDetails}>
                <span
                  className={styles.buttonIncrement}
                  onClick={decreaseQuantity}
                >
                  -
                </span>
                <button aria-label="change quantity" className={styles.counter}>
                  {quantity}
                </button>
                <span
                  className={styles.buttonDecrement}
                  onClick={increaseQuantity}
                >
                  +
                </span>
              </div>
              <div className={styles.productPr}>
                <h4>{product.price}$</h4>
              </div>
            </div>
            <button className={styles.addToCart} onClick={addProducts}>
              Add to cart
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addProduct: productActions.addProduct,
};

export default connect(null, mapDispatchToProps)(ProductPage);
