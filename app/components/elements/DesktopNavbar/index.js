import Link from 'next/link';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
//slider
//contact
const DesktopNavbar = ({ isHome }) => {
  const scrollToSection = (e) => {
    if (!isHome) return
      e.preventDefault();
    let target = e.target.getAttribute('data-scroll');
    gsap.to(window, {
      duration: 2,
      scrollTo: `#${target}`,
      ease: 'expo.inOut',
    });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a data-scroll="slider" onClick={scrollToSection}>
              Our products
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a data-scroll="about" onClick={scrollToSection}>
              About us
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            <a data-scroll="contact" onClick={scrollToSection}>
              Contact
            </a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/login">
            <a> Login</a>
          </Link>
        </li>
      </ul>
      <div className={styles.circle}></div>
    </nav>
  );
};

export default DesktopNavbar;
