import Link from "next/link";
import styles from '../styles/Footer.module.scss';
import IconGh from '../svg/gh';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='https://github.com/revidovich' target="_blank" rel="noreferrer">
        <IconGh className={styles.icon} />
      </Link>
    </footer>
  );
};

export default Footer;