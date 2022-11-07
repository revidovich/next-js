import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";
import styles from "../../styles/List.module.scss";
import { useState, useEffect } from "react";

const Index = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Heading text='List of users:' />
      <ul className={styles.list}>
        {users && users.map(({ id, name, email }) => (
          <li key={id}>
            <strong>
                {name}
              <Link href="./users/user">
                {name}
              </Link>
            </strong> ({email})
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;