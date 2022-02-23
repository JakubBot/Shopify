import Header from '@element/Header';
import Footer from '@element/Footer';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import uniqid from 'uniqid';
import { useState } from 'react';
import { totalPricesProducts } from '@util/helperFunctions';

const OrderPageTemplate = ({ products, shippingAddress, user }) => {
  const router = useRouter();
  const [productsPrice, setProductsPrice] = useState(0);
  useEffect(() => {
    if (!user.token) router.push('/login?redirect=/order');
    if (Object.values(shippingAddress).some((adress) => adress === ''))
      router.push('/shippingAddress');
  }, [shippingAddress, router, user]);

  useEffect(() => {
    let totalPrices = totalPricesProducts(products);
    setProductsPrice(totalPrices);
  }, [products]);

  const shipping = {
    fullName: {
      value: shippingAddress.fullName,
      title: 'Full Name',
    },
    address: {
      value: shippingAddress.address,
      title: 'Address',
    },
    city: {
      value: shippingAddress.city,
      title: 'City',
    },
    postalCode: {
      value: shippingAddress.postalCode,
      title: 'Postal Code',
    },
  };

  return (
    <div className={styles.orderContainer}>
      <Header />
      <div className={styles.order}>
        <div className={styles.orderWrapper}>
          <div className={styles.orderProducts}>
            <h3 className={styles.orderTitle}>Your Products</h3>
            <ul className={styles.productList}>
              <li className={styles.product}>
                <span className={`${styles.productCell} ${styles.productName}`}>
                  Name
                </span>
                <span
                  className={`${styles.productCell} ${styles.productPrice}`}
                >
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
            <div className={styles.sum}>
              <span className={styles.sumCell}>Sum</span>
              <span className={styles.sumCell}>{productsPrice}$</span>
            </div>
          </div>
          <div className={styles.payment}>
            <div>
              <h3 className={styles.paymentTitle}>Payment</h3>
            </div>
            <div>
              <button>PayPal</button>
            </div>
            <button>PayPal</button>
          </div>
        </div>
        <div className={styles.shipping}>
          <div>
            <h3 className={styles.shippingTitle}>Shopping address</h3>
          </div>
          {Object.values(shipping).map(({ title, value }) => (
            <div key={uniqid()} className={styles.wrapper}>
              <span>{title}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div className={styles.menu__item}>
          {/* <a className={styles.menu__item__link}>Asterisks</a> */}
          <div className={styles.marquee}>
            <div className={styles.marquee__inner} aria-hidden="true">
              <span>Discounts</span>
              <span>Discounts</span>
              <span>Discounts</span>
              <span>Discounts</span>
            </div>
          </div>
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
