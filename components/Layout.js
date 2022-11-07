import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Main.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.background}></div>
        <div className={styles.overlay}></div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;