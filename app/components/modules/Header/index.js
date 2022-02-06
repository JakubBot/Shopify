import { useRef, useState } from 'react';
import styles from './index.module.scss';
const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const burgerRef = useRef();
  const changeBurger = () => {
    setIsActive(!isActive);
    burgerRef.current.classList.toggle('active');
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Shop<span className={styles.emptySpan}>ify</span>
      </h2>
      <div
        ref={burgerRef}
        className={`${styles.burgerMenu} ${
          isActive ? styles.burgerMenuActive : ''
        }`}
        onClick={changeBurger}
      >
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
      {isActive && (
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.item}>Our products</li>
            <li className={styles.item}>About us</li>
            <li className={styles.item}>Contact</li>
            <li className={styles.item}>Login</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
