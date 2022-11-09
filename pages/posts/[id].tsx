import { GetStaticPaths } from "next";
import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.title || 'Post'}</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;