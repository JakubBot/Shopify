import Header from '@element/Header';
import Footer from '@element/Footer';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import uniqid from 'uniqid';
import { useState } from 'react';
import { totalPricesProducts } from '@util/helperFunctions';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import * as productActions from '@redux/actions/productActions';
import { toast } from 'react-toastify';
import { getError } from '@util/error';

const OrderPageTemplate = ({ products, shippingAddress, user, clearCart }) => {
  const initialOptions = {
    'client-id': process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL,
    currency: 'USD',
  };

  const router = useRouter();
  const [productsPrice, setProductsPrice] = useState(0);
  useEffect(() => {
    if (!user.token) router?.push('/login?redirect=/order');
    if (Object.values(shippingAddress).some((adress) => adress === ''))
      router?.push('/shippingAddress');
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
  // function saveOrder() {
  //   try {
  //     axios.post(
  //       '/api/orders',
  //       { products, shippingAddress },
  //       {
  //         headers: {
  //           authorization: `Bearer ${user.token}`,
  //         },
  //       }
  //     );
  //     clearCart();
  //     toast.success('Order was saved', {
  //       theme: 'colored',
  //     });
  //     router.push('/');
  //   } catch (err) {
  //     alert(err);
  //   }
  // }
  function onApprove(data, actions) {
    return actions.order.capture().then(async function () {
      try {
        axios.post(
          '/api/orders',
          { products, shippingAddress },
          {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          }
        );
        clearCart();
        toast.success('Order was saved', {
          theme: 'colored',
        });
        router.push('/');
      } catch (err) {
        toast.error(getError(err), {
          theme: 'colored',
        });
      }
    });
  }

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
              <ol aria-label="products" className={styles.productList}>
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
              </ol>
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
            <PayPalScriptProvider options={initialOptions}>
              <div className={styles.paymentButtons}>
                <PayPalButtons
                
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: productsPrice,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={onApprove}
                />
              </div>
            </PayPalScriptProvider>
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

const mapDispatchToProps = {
  clearCart: productActions.clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPageTemplate);
