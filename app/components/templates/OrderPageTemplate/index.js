import Header from '@element/Header';
import Footer from '@element/Footer';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const OrderPageTemplate = ({ products, shippingAddress, user }) => {
  const router = useRouter();
  useEffect(() => {
    if (!user.token) router.push('/login?redirect=/order');
    if (Object.values(shippingAddress).some((adress) => adress === ''))
      router.push('/shippingAddress');
  }, [shippingAddress, router, user]);

  return (
    <div className={styles.orderContainer}>
      <Header />
      <div className={styles.order}>
        <div className={styles.orderProducts}>
          <h2 className={styles.orderTitle}>Your Products</h2>
          <ul className={styles.productList}>
            <li className={styles.product}>
              <span className={`${styles.productCell} ${styles.productName}`}>
                Name
              </span>
              <span className={`${styles.productCell} ${styles.productPrice}`}>
                Price
              </span>
              <span
                className={`${styles.productCell} ${styles.productQuantity}`}
              >
                Quantity
              </span>
            </li>
            {products.map(({ name, price, quantity, id }) => {
              return (
                <li key={id} className={styles.product}>
                  <span className={styles.productCell}>{name}</span>
                  <span className={styles.productCell}>{price}$</span>
                  <span
                    className={`${styles.productCell} ${styles.alignCenter}`}
                  >
                    {quantity}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.payment}>
          <h2>sa</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { products, shippingAddress, user } = state;
  return { products, shippingAddress, user };
};

export default connect(mapStateToProps)(OrderPageTemplate);
