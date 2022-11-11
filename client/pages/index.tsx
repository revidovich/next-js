import Head from "next/head";
import Heading from "../components/Heading";
import Chat from "../components/Chat";
import Socials from '../components/Socials';

export const getStaticProps = async () => {
  try { 
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
  } catch {
    return {
      props: { socials: null }
    }
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
      <Chat />
    </>
  );
};

export default Index;