import Link from "next/link";

const Index = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Link href="/about">
        About
      </Link>
      <Link href="/posts">
        Posts
      </Link>
      <Link href="/users">
        Users
      </Link>
      <style jsx>
        {`
          h1 {
            color: #255;
          }
          a {
            color: #255;
          }
        `}
      </style>
    </>
  );
};

export default Index;