import { gsap } from 'gsap';

const scrollToSection = (target, isHome) => {
  if (!isHome) return;
  gsap.to(window, {
    duration: 2,
    scrollTo: `#${target}`,
    ease: 'expo.inOut',
    delay: 0.5,
  });
};

export { scrollToSection };
