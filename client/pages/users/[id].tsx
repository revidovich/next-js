import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import Heading from '../../components/Heading';
import UserInfo from "../../components/UserInfo";
import { userType } from "../../types";

type userTypeProps = {
  user: userType,
};

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { user: data },
  }
};

const User:FC<userTypeProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>{user?.name || 'User'}</title>
      </Head>
      <UserInfo user={user} />
    </>
  );
};

export default User;