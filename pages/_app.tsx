import '../styles/globals.css';
import Head from "next/head";
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="./logo.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;