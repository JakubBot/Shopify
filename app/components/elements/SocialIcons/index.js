import Link from 'next/link';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import styles from './index.module.scss';

const SocialIcons = ({ lDesktop }) => {
  return (
    <>
      <div className={`${styles.socialIcons} ${styles.lDesktop}`}>
        <Link href="/cos">
          <a>
            <FaFacebook />
          </a>
        </Link>
        <Link href="">
          <a>
            <FaTwitter />
          </a>
        </Link>
        <Link href="">
          <a>
            <FaInstagram />
          </a>
        </Link>
      </div>
    </>
  );
};

export default SocialIcons;
