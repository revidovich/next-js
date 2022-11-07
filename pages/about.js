import Link from "next/link";
import Heading from '../components/Heading';

const About = () => {
  return (
    <>
      <Heading text='About' />
      <Link href="/about">
        About
      </Link>
      <Link href="/posts">
        Posts
      </Link>
      <Link href="/users">
        Users
      </Link>
    </>
  );
};

export default About;