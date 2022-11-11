import Link from "next/link";
import Head from "next/head";
import Heading from "../../components/Heading";
import styles from "../../styles/List.module.scss";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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

const Index = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text='Posts:' />
      <ul className={styles.list}>
        {posts && posts.map(({ title, id }) => (
          <li key={id}>
              <Link href={`./posts/${id}`}>
                {title}
              </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;