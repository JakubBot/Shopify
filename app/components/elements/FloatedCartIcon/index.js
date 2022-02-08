import { BsCart2 } from 'react-icons/bs';
import styles from './index.module.scss';

const FloatedCartIcon = () => {
  return (
    <div className={styles.cartContainer}>
      <BsCart2 className={styles.cartIcon} />
    </div>
  );
};

export default FloatedCartIcon;
