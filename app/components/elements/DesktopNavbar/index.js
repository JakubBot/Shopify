import Link from 'next/link';
import styles from './index.module.scss';
const DesktopNavbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a>Our products</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a>About us</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
      <div className={styles.circle}></div>
    </nav>
  );
};

export default DesktopNavbar;
