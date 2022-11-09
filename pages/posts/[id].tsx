import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Head from "next/head";
import { FC } from "react";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../types";

interface IParams extends ParsedUrlQuery {
  id: string
}
type postTypeProps = {
  post: postType
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
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

const Post: FC<postTypeProps> = ({ post }) => {
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