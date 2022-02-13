// import { gsap } from 'gsap';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const snapScrolling = (containerRef) => {
  let container = containerRef.current;
  let scrollDirection = 1;

  let sectionLength = container.children.length;
  const arr = new Array(sectionLength).fill(1);
  let snapVals = arr.map((value,index) => index / (sectionLength - 1))
  const snapParams = {
    snapTo: (v) => {
      const offset = 0.015;
      let newVal = v;

      for (let i = 0; i < snapVals.length - 1; i++) {
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

  gsap.to(container, {
    yPercent: -(100 - 100 / container.children.length),
    ease: 'none',

    scrollTrigger: {
      id: 'snapScrolling',
      trigger: container,
      scrub: 1,
      start: 'top top',
      end: 'bottom bottom',
      snap: snapParams,
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        scrollDirection = self.direction;
      },
    },
  });
};

export function clearPageScrolling() {
  ScrollTrigger.getById('snapScrolling').kill(true);
}

export default snapScrolling;
