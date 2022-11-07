import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {

  const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Users', path: '/users'},
    {id: 4, title: 'Contacts', path: '/contacts'},
    {id: 3, title: 'About', path: '/about'},
  ]
  return (
    <nav className={styles.nav}>
      {navigation.map(({id, title, path}) => (
      <Link key={id} href={path} className={styles.link}>
        {title}
      </Link>
      ))}
    </nav>
  );
};

export default Navbar;