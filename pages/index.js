import Head from "next/head";
import Heading from "../components/Heading";
import Socials from '../components/Socials';

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const Index = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <Heading text='My next.js application' />
      <Socials socials={socials} />
    </>
  );
};

export default Index;