import { useState } from 'react';
import styles from './index.module.scss';
import { BsCart2 } from 'react-icons/bs';

const FloatedCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const changeActive = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${styles.action} ${isOpen ? styles.active : ''}`}
      onClick={changeActive}
    >
      <span className={styles.icon}>
        <BsCart2 />
      </span>
      <ul className={styles.list}>
        <li className={`${styles.listItemHeader}`}>
          <span className={styles.listTitle}>Item</span>
          <span className={`${styles.listTitle}`}>Quantity</span>
          <span className={styles.listTitle}>Price</span>
        </li>
        <li className={`${styles.listItemHeader}`}>
          <span className={styles.listTitle}>Cos tam</span>
          <span className={`${styles.listTitle}  ${styles.listQuantity}`}>
            2
          </span>
          <span className={styles.listTitle}>16.99$</span>
        </li>
        <li className={`${styles.listItemHeader}`}>
          <span className={styles.listTitle}>Cos tam</span>
          <span className={`${styles.listTitle}  ${styles.listQuantity}`}>
            2
          </span>
          <span className={styles.listTitle}>16.99$</span>
        </li>
        {/* <li className={styles.listItem}>
          <a
            target="_blank"
            href="https://twitter.com/explore"
            rel="noreferrer"
          >
            <i className={styles.iconTwitter}><BsCart2 /></i>Share on twitter
          </a>
        </li>
        <li className={styles.listItem}>
          <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
            <i className={styles.iconFacebook}></i>Share on facebook
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            target="_blank"
            href="https://www.instagram.com/?hl=pl"
            rel="noreferrer"
          >
            <i className={styles.iconInstagram}></i>Share on instagram
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default FloatedCart;

{
  /* <div className={styles.floatedCart}>
<h1>s</h1>
</div> */
}
