import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { scrollToSection } from '@util/gsap';
import FloatedCartIcon from '@element/FloatedCartIcon';
import styles from './index.module.scss';

const SmoothScrollingPage = ({ children, scrollTar }) => {
  useEffect(() => {
    var html = document.documentElement;
    var body = document.body;
    var scroller = {
      target: document.querySelector('#scroll-container'),
      ease: 0.05,
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0,
    };

    var requestId = null;
    gsap.set(scroller.target, {
      rotation: 0.01,
      force3D: true,
    });

    scrollToSection(scrollTar, true);

    updateScroller();
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + 'px';
        scroller.resizeRequest = 0;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      gsap.set(scroller.target, {
        id: 'test',
        y: -scroller.y,
      });

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      body.style.height ='auto'
    };
  }, [scrollTar]);
  return (
    <div className={styles.viewport}>
      <div id="scroll-container" className={styles.scrollContainer}>
        {children}
      </div>
      <FloatedCartIcon />
    </div>
  );
};

export default SmoothScrollingPage;
