import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";
import styles from "../../styles/List.module.scss";
import { GetStaticProps } from "next";
import { userType } from "../../types";
import { FC } from "react";

type usersTypeProps = {
  users: userType[],
};

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { users: data },
  }
};

const Index:FC<usersTypeProps> = ({ users }) => {
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
              <Link href={`./users/${id}`}>
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