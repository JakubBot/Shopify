import Link from 'next/link';
import styles from './index.module.scss';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { scrollToSection } from '@util/gsap';
import { useRouter } from 'next/router';
gsap.registerPlugin(ScrollToPlugin);

const DesktopNavbar = ({ isHome }) => {
  const router = useRouter();
  const scrollTo = (e) => {
    let dataScroll = e.target.getAttribute('data-scroll');
    if (isHome) {
      scrollToSection(dataScroll, isHome);
    } else {
      router.push(`/?scrollTo=${dataScroll}`);
    }
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
