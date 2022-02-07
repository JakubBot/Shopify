import { gsap } from 'gsap';
function getTimeLine({ navbarRef, listRef }) {
  return gsap
    .timeline({ paused: true })
    .set(navbarRef.current, { xPercent: -100 })
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
}

export default getTimeLine;
