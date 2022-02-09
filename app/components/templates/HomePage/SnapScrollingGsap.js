import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let scrollDirection = 1;
const snapVals = [0, 1 / 3, 2 / 3, 1];

const snapScrolling = (containerRef) => {
  const snapParams = {
    snapTo: (v) => {
      const offset = 0.015;
      let newVal = v;

      for (let i = 0; i < snapVals.length - 1; i++) {
        // If it's inbetween this pair of values
        if (v > snapVals[i] && v < snapVals[i + 1]) {
          const breakPoint =
            scrollDirection > 0
              ? snapVals[i] + offset
              : snapVals[i + 1] - offset;
          newVal = v < breakPoint ? snapVals[i] : snapVals[i + 1];
        }
      }
      return newVal;
    },
    duration: { min: 0.2, max: 0.6 },
    delay: 0.1,
  };

  gsap.to(containerRef.current, {
    yPercent: -(100 - 100 / containerRef.current.children.length),
    ease: 'none',

    scrollTrigger: {
      trigger: containerRef.current,
      scrub: 1,
      start: 'top top',
      end: 'bottom bottom',
      snap: snapParams,
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => (scrollDirection = self.direction),
    },
  });
}

export default snapScrolling