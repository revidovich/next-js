import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Main.module.scss';

type lauoutProps = {
  children: ReactNode,
}

const Layout:FC<lauoutProps> = ({ children }) => {
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