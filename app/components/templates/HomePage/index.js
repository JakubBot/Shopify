import HomeWelcome from '@module/HomeWelcome';
import OurProductsSlider from '@module/OurProductsSlider';
import AboutUs from '@module/AboutUs';
import Contact from '@module/Contact';
import uniqid from 'uniqid';
import { useRouter } from 'next/router';
import SmoothScrollingPage from '@layout/SmoothScrollingPage';

import styles from './index.module.scss';
const HomePage = ({ newProducts }) => {
  const router = useRouter();

  const components = [
    <HomeWelcome key={uniqid()} isHome />,
    <OurProductsSlider key={uniqid()} newProducts={newProducts} />,
    <AboutUs key={uniqid()} />,
    <Contact key={uniqid()} />,
  ];

  return (
    <>
      <SmoothScrollingPage scrollTar={router.query.scrollTo}>
        {components.map((component) => (
          <section className={styles.section} key={component.key}>
            {component}
          </section>
        ))}
      </SmoothScrollingPage>
    </>
  );
};

export default HomePage;
