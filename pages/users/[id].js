import Head from "next/head";
import Heading from '../../components/Heading';
import UserInfo from "../../components/UserInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  console.log('context', context)
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

const User = ({ user }) => {
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