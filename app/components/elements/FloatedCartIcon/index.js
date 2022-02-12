import { BsCart2 } from 'react-icons/bs';
import styles from './index.module.scss';

const FloatedCartIcon = ({ position }) => {
  console.log(position);
  return (
    <div className={`${styles.cartContainer} ${position === 'right' ? styles.right : styles.left}`}>
      <BsCart2 className={styles.cartIcon} />
    </div>
  );
};

export default FloatedCartIcon;
