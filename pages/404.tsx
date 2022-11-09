import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Heading from '../components/Heading';

const Error = () => {
  const router = useRouter();
  
  useEffect( () => {
    setTimeout(() => {
      router.push('/')
    }, 3000);
  }, [])

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text='404' />
      <Heading tag='h2' text='The page at this address does not exist.' />
      <Heading tag='h3' text='Redirect to the main page in 3 seconds.' />
    </>
  );
};

export default Error;