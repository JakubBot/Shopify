import Link from 'next/link';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { scrollToSection } from '@util/gsap';
gsap.registerPlugin(ScrollToPlugin);
//slider
//contact
const DesktopNavbar = ({ isHome }) => {
  const scrollTo = (e) => {
    let dataScroll = e.target.getAttribute('data-scroll');

    scrollToSection(dataScroll, isHome);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li data-scroll="slider" className={styles.listItem} onClick={scrollTo}>
          Our products
        </li>
        <li data-scroll="about" className={styles.listItem} onClick={scrollTo}>
          About us
        </li>
        <li
          data-scroll="contact"
          className={styles.listItem}
          onClick={scrollTo}
        >
          Contact
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
