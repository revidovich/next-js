import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/posts" className={styles.link}>
        Posts
      </Link>
      <Link href="/users" className={styles.link}>
        Users
      </Link>
      <Link href="/contacts" className={styles.link}>
        Contacts
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </nav>
  );
};

export default Navbar;