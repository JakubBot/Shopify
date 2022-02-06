import { useRef, useState, useEffect } from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai';
import styles from './index.module.scss';

import { gsap } from 'gsap';
const timeline = gsap.timeline({ paused: true });

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const burgerRef = useRef();
  const navbarRef = useRef();
  const listRef = useRef();

  const changeBurger = () => {
    if (!isActive) {
      // gsap.fromTo(
      //   navbarRef.current,
      //   {
      //     xPercent: -100,
      //   },
      //   { xPercent: 0, duration: 1.5, ease: 'Expo.easeInOut' }
      // );
      timeline.play();
    } else {
      // const timeline = gsap.timeline();
      // timeline
      //   .fromTo(
      //     listRef.current.children,
      //     {
      //       y: 0,
      //     },
      //     { y: 140, duration: 1, ease: 'power3.inOut' }
      //   )
      //   .fromTo(
      //     navbarRef.current,
      //     {
      //       xPercent: 0,
      //       opacity: 1,
      //     },
      //     { xPercent: -100, opacity: 0, ease: 'Expo.easeInOut', duration: 1.5 }
      //   );
      timeline.reverse();
    }

    setIsActive(!isActive);
    burgerRef.current.classList.toggle('active');
  };
  useEffect(() => {
    gsap.set(navbarRef.current, { xPercent: -100 });
    timeline
      .fromTo(
        navbarRef.current,
        {
          xPercent: -100,
        },
        { xPercent: 0, ease: 'Expo.easeInOut', duration: 1.5 }
      )
      .from(listRef.current.children, {
        autoAlpha: 0,
        ease: 'Expo.easeInOut',
        duration: 1.5,
        stagger: 0.08,
        y: 25,
      });
  }, []);
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
      <nav ref={navbarRef} className={styles.navbar}>
        <div className={styles.contentWrapper}>
          <ul ref={listRef} className={styles.list}>
            <li className={styles.itemWrapper}>
              <span className={styles.number}>01. </span>
              <span className={styles.destination}>Our products /</span>
              <span className={styles.describe}>Amazing</span>
            </li>
            <li className={styles.itemWrapper}>
              <span className={styles.number}>02. </span>
              <span className={styles.destination}>About us /</span>
              <span className={styles.describe}>We</span>
            </li>
            <li className={styles.itemWrapper}>
              <span className={styles.number}>03. </span>
              <span className={styles.destination}>Contact /</span>
              <span className={styles.describe}>Say hello</span>
            </li>
            <li className={styles.itemWrapper}>
              <span className={styles.number}>04. </span>
              <span className={styles.destination}>Login /</span>
              <span className={styles.describe}>Painless</span>
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
    </header>
  );
};

export default Header;
