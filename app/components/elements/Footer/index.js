import { BsFillTelephoneFill } from 'react-icons/bs';
import Link from 'next/link';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <h3 className={styles.footerLink}>
          <Link href="/">
            <a>Promotions</a>
          </Link>
        </h3>
        <h3 className={styles.footerLink}>
          <Link href="/">
            <a>Employees</a>
          </Link>
        </h3>
        <h3 className={styles.footerLink}>
          <Link href="/">
            <a>Terms</a>
          </Link>
        </h3>
      
      </div>
      <div className={styles.footerPhone}>
        <BsFillTelephoneFill className={styles.phone} />
        <h3>772567123</h3>
      </div>
    </div>
  );
};

export default Footer;
