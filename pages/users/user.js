import Head from "next/head";
import Heading from '../../components/Heading';

const user = () => {
  return (
    <>
      <Head>
        <title>User1</title>
      </Head>
      <Heading text='User1' />
    </>
  );
};

export default user;