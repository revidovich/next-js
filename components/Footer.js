import Link from "next/link";
import styles from '../styles/Footer.module.scss';
import IconGh from '../svg/gh';
import IconGl from '../svg/gl';
import IconTg from '../svg/tg';
import IconTw from '../svg/tw';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href='https://t.me/revidovich' target="_blank" rel="noreferrer">
        <IconTg className={styles.icon} />
      </Link>
      <Link href='https://github.com/revidovich' target="_blank" rel="noreferrer">
        <IconGh className={styles.icon} />
      </Link>
      <Link href='https://gitlab.dsgrad.devops.lanit-tercom.com/arevidovich' target="_blank" rel="noreferrer">
        <IconGl className={styles.icon} />
      </Link>
      <Link href='https://twitter/arevidovich' target="_blank" rel="noreferrer">
        <IconTw className={styles.icon} />
      </Link>
    </footer>
  );
};

export default Footer;