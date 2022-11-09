import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar:FC = () => {

  const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Users', path: '/users'},
    {id: 4, title: 'Contacts', path: '/contacts'},
    {id: 5, title: 'About', path: '/about'},
  ];

  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      {navigation.map(({id, title, path}) => (
      <Link key={id} href={path} className={pathname === path ? styles.active : styles.link}>
        {title}
      </Link>
      ))}
    </nav>
  );
};

export default Navbar;