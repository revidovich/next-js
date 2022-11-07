import Head from "next/head";
import Heading from '../../components/Heading';
import UserInfo from "../../components/UserInfo";

const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>User1</title>
      </Head>
      <Heading text='User1' />
      <UserInfo user={user} />
    </>
  );
};

export default User;