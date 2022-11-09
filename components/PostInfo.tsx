import { FC } from 'react';
import Heading from "./Heading";
import { postType } from '../types';

type postInfoProps = {
  post: postType,
}

const PostInfo:FC<postInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag='h2' text='No posts' />
  }
  return (
    <>
      <Heading text={title} />
      {body}
    </>
  );
};

export default PostInfo;