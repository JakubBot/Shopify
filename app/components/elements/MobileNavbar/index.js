import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai';
import Link from 'next/link';
import styles from './index.module.scss';
const MobileNavbar = ({ navbarRef, listRef, onClick }) => {
  return (
    <nav ref={navbarRef} className={styles.navbar}>
      <div className={styles.contentWrapper}>
        <ul ref={listRef} className={styles.list}>
          <li
            data-scroll="slider"
            onClick={onClick}
            className={styles.itemWrapper}
          >
            <span className={styles.number}>01. </span>
            <span className={styles.destination}>Our products /</span>
            <span className={styles.describe}>Amazing</span>
          </li>
          <li
            data-scroll="about"
            onClick={onClick}
            className={styles.itemWrapper}
          >
            <span className={styles.number}>02. </span>
            <span className={styles.destination}>About us /</span>
            <span className={styles.describe}>We</span>
          </li>
          <li
            data-scroll="contact"
            onClick={onClick}
            className={styles.itemWrapper}
          >
            <span className={styles.number}>03. </span>
            <span className={styles.destination}>Contact /</span>
            <span className={styles.describe}>Say hello</span>
          </li>
          <li className={styles.itemWrapper}>
            <Link href="/login">
              <a>
                <span className={styles.number}>04. </span>
                <span className={styles.destination}>Login /</span>
                <span className={styles.describe}>Painless</span>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.asideText}>Hard Work</div>
        <div className={styles.icons}>
          <AiFillFacebook className={styles.icon} />
          <AiFillTwitterSquare className={styles.icon} />
          <AiOutlineInstagram className={styles.icon} />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
