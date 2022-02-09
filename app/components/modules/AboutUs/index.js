import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Title,
  BarController,
  BarElement,
} from 'chart.js';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  BarController,
  BarElement
);
import SocialIcons from '@element/SocialIcons';
import hoverEffect from 'hover-effect'
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import styles from './index.module.scss';

const labels = [
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
];

const clients = [120, 140, 160, 140, 170, 180, 190, 180, 200];

const AboutUs = () => {
  const [dat, setDat] = useState({ datasets: [] });
  useEffect(() => {
    const canvas = document.querySelector('#char');
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);

    gradient.addColorStop(0, 'rgba(48, 31, 153,1)');
    gradient.addColorStop(0.7, 'rgba(124, 28, 148,1)');
    gradient.addColorStop(1, 'rgba(184, 54, 147,1)');

    setDat({
      labels,
      datasets: [
        {
          label: '',
          data: clients.map((client) => client * 1000),
          borderColor: gradient,
        },
      ],
    });


     new hoverEffect({
      parent: document.querySelector('#displacementImage'),
      intensity: 0.3,
      image1: '/kayaks/kayaks1.webp',
      image2: '/kayaks/kayaks2.webp',
      displacementImage: '/kayaks/displacementMap.jpg'
  });
  }, []);

  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.dataContainer}>
        <h1 className={styles.aboutUsTitle}>Who we are?</h1>

        <div className={styles.chartJs}>
          <h3 className={styles.chartJsTitle}>Number of clients</h3>
          <Line
            id="char"
            type="line"
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
            data={dat}
          />
        </div>
        <div className={styles.data}>
          <h3 className={styles.dataTitle}>History</h3>
          {/* <div className={styles.dataContainer}>
            <div className={styles.dataContainerItem}>
              <h5>Restaurants</h5>
              <h5>1200</h5>
            </div>
            <div className={styles.dataContainerItem}>
              <h5>Clients</h5>
              <h5>200 000</h5>
            </div>
            <div className={styles.dataContainerItem}>
              <h5>Rating</h5>
              <h5>9/10</h5>
            </div>
          </div> */}
          <div className={styles.companyHistory}>
            {`  Brothers Maurice and Richard founded Shopify's first restaurant, Get
            Shopify's Corporation in 2010, transforming their restaurant into
            online restaurants. The original Shopify focused on its burgers,
            fries, and smoothies selling them at half the price and very fast
            compared to competing restaurants. They later moved online with even
            greater success and continue to do so today`}
          </div>
        </div>
      </div>
      <div className={styles.imgContainer} id="displacementImage">
        {/* <img src="/kayaks/kayaks1.webp" className={styles.img} /> */}
      </div>
      <SocialIcons display={'lDesktop'} />
    </div>
  );
};

export default AboutUs;
// {
//   datasets: [
//     {
//       id: 1,
//       label: 'Orders',
//       data: [100000, 120000, 150000],
//       borderColor: createGradient(chart.ctx, chart.chartArea),
//     },
//     {
//       id: 2,
//       label: '',
//       data: [3, 2, 1],
//     },
//   ],
// }
