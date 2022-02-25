import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import AboutUs from '@module/AboutUs';
import Contact from '@module/Contact';
import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import uniqid from 'uniqid';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { scrollToSection } from '@util/gsap';
const HomePage = ({ newProducts }) => {
  const router = useRouter();
  useEffect(() => {
    scrollToSection(router.query.scrollTo, true);
  }, [router]);
  const components = [
    <HomeWelcome key={uniqid()} isHome />,
    <OurProductsSlider key={uniqid()} newProducts={newProducts} />,
    <AboutUs key={uniqid()} />,
    <Contact key={uniqid()} hasForm={true} />,
  ];

  return (
    <>
      <SnapScrollingLayout components={components} />
    </>
  );
};

export default HomePage;
