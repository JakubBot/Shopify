import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import AboutUs from '@module/AboutUs';
import Contact from '@module/Contact';
import SnapScrollingLayout from '@layout/SnapScrollingLayout';
import uniqid from 'uniqid';
const HomePage = ({ newProducts }) => {

  const components = [
    <HomeWelcome key={uniqid()} />,
    <OurProductsSlider key={uniqid()} newProducts={newProducts} />,
    <AboutUs key={uniqid()} />,
    <Contact key={uniqid()} />,
  ];


  return (
    <>
      <SnapScrollingLayout components={components} />
    </>
  );
};

export default HomePage;
