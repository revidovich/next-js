import Link from "next/link";
import Heading from "../components/Heading";

const Index = () => {
  return (
    <>
      <Heading text='My next.js application' />
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

export default Index;