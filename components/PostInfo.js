import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { userId, title, body } = post || {};

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