import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";


const Index = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Heading text='List of users:' />
      <Link href="./users/user">
        User1
      </Link>
    </>
  );
};

export default Index;