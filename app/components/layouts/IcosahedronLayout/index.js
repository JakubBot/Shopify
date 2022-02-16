import Header from '@element/Header';
import Footer from '@element/Footer';
import styles from './index.module.scss';
import Icosahedron from '@element/Icosahedron';

const IcosahedronLayout = ({ children }) => {
  return (
    <div className={styles.registerContainer}>
      <Header />
      <div className={styles.register}>
        {children}
        <div className={styles.icosahedron}>
          <Icosahedron />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IcosahedronLayout;
