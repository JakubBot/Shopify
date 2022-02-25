import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import AboutUs from '@module/AboutUs';
import Contact from '@module/Contact';
import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import uniqid from 'uniqid';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { scrollToSection } from '@util/gsap';
import { useState } from 'react';
const HomePage = ({ newProducts }) => {
  const router = useRouter();
  const [hasFocus, setHasFocus] = useState(false);
  console.log(hasFocus);
  useEffect(() => {
    scrollToSection(router.query.scrollTo, true);
  }, [router]);
  const components = [
    <HomeWelcome key={uniqid()} isHome />,
    <OurProductsSlider key={uniqid()} newProducts={newProducts} />,
    <AboutUs key={uniqid()} />,
    <Contact setHasFocus={setHasFocus} key={uniqid()} />,
  ];

  return (
    <>
      <SnapScrollingLayout hasFocus={hasFocus} components={components} />
    </>
  );
};

export default HomePage;
