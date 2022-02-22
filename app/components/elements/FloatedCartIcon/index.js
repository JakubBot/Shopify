import { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { BsCart2 } from 'react-icons/bs';
import { connect } from 'react-redux';
import Link from 'next/link';
import * as productActions from '@redux/actions/productActions';

const FloatedCart = ({ products, deleteProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsPrice, setProductsPrice] = useState(0);
  const changeActive = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let priceSum = products.reduce((acc, product) => {
      const { price, quantity } = product;
      return acc + price * quantity;
    }, 0);
    setProductsPrice(priceSum.toFixed(2));
  }, [products]);

  const deleteProducts = (product) => {
    deleteProduct(product);
  };

  return (
    <>
      <div
        className={`${styles.action} ${isOpen ? styles.active : ''}`}
        onClick={changeActive}
      >
        <span className={styles.icon}>
          <BsCart2 />
          <span className={styles.number}>{products.length}</span>
        </span>

        {products.length !== 0 && (
          <ul className={styles.list}>
            <li className={styles.listItemHeader}>
              <span className={styles.listTitle}>Item</span>
              <span className={`${styles.listTitle}`}>Quantity</span>
              <span className={styles.listTitle}>Price</span>
              <span></span>
            </li>
            {products.map((product) => {
              const { name, quantity, price, id } = product;
              return (
                <li key={id} className={`${styles.listItemHeader}`}>
                  <span className={styles.listTitle}>{name}</span>
                  <span className={`${styles.listTitle}`}>{quantity}</span>
                  <span className={styles.listTitle}>{price}$</span>
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteProducts(product)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
            <li className={`${styles.listSumContainer}`}>
              <span className={styles.listSum}>Sum</span>
              <span className={`${styles.listPrice}`}>{productsPrice}$</span>
              <span className={`${styles.buyBtn}`}>
                <Link href="/order">
                  <a>Buy</a>
                </Link>
              </span>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};
const mapDispatchToProps = {
  deleteProduct: productActions.deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatedCart);
