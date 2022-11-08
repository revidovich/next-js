import Head from "next/head";
import Image from "next/image";
import Heading from "../components/Heading";
import starImg from '../public/logo.png';
import Socials from '../components/Socials';

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/socials/');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data },
  }
};

const Index = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <Heading text='My next.js application' />
      <Image src={starImg} width='150' height='150' alt='' placeholder="blur" />
      <Socials socials={socials} />
    </>
  );
};

export default Index;