import Head from 'next/head';
import FloatedCartIcon from '@element/FloatedCartIcon';
import styles from './index.module.scss';
import React, { useEffect, useRef } from 'react';
import SnapScrollingGsap, { clearPageScrolling } from './SnapScrollingGsap';

const SnapScrollingLayout = ({ title, description, components }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    SnapScrollingGsap(containerRef);

    return () => clearPageScrolling();
  }, []);
  return (
    <>
      <Head>
        <title> {title ?? 'Shopify'}</title>
        <meta
          name="description"
          content={
            description ??
            'Shopify brings you the best food made of magnificient products'
          }
        ></meta>
      </Head>
      <div>
        <FloatedCartIcon />

        <div ref={containerRef} className={styles.homeContainer}>
          {components.map((component) => {
            return (
              <section className={styles.section} key={component.key}>
                {component}
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SnapScrollingLayout;
