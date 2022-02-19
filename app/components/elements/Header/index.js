import { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import MobileNavbar from '@element/MobileNavbar';
import DesktopNavbar from '@element/DesktopNavbar';
import getTimeLine from './timeline';

let timeline;

const Header = ({ isHome }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth > 550 ? false : true
  );

  const burgerRef = useRef();
  const navbarRef = useRef();
  const listRef = useRef();

  const changeBurger = () => {
    if (!isActive) {
      timeline.play();
    } else {
      timeline.reverse();
    }
    setIsActive(!isActive);
    burgerRef.current.classList.toggle('active');
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth > 550 ? false : true);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (!isMobile) return;

    timeline = getTimeLine({ navbarRef, listRef });
  }, [isMobile]);
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        Shop<span className={styles.emptySpan}>ify</span>
      </h2>

      {isMobile ? (
        <>
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
          <MobileNavbar navbarRef={navbarRef} listRef={listRef} />
        </>
      ) : (
        <DesktopNavbar isHome={isHome ? true : false} />
      )}
    </header>
  );
};

export default Header;
