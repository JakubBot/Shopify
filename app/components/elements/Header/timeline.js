import { gsap } from 'gsap';
function getTimeLine({ navbarRef, listRef }) {
  return gsap
    .timeline({ paused: true })
    .set(navbarRef.current, { xPercent: -100, autoAlpha: 1 })
    .fromTo(
      navbarRef.current,
      {
        xPercent: -100,
      },
      { xPercent: 0, ease: 'Expo.easeInOut', duration: 1.5 }
    )
    .fromTo(
      listRef.current.children,
      {
        autoAlpha: 0,
        y: 25,
      },
      {
        ease: 'Expo.easeInOut',
        duration: 1.5,
        stagger: 0.08,
        autoAlpha: 1,
        y: 0,
      }
    );
}

export default getTimeLine;
