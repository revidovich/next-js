import Head from "next/head";
import Heading from '../components/Heading';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading
        text='Posts list'
      />
      <p>This is post № 1</p>
    </>
  );
};

export default Posts;