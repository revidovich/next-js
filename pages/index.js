import Link from "next/link";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

const Index = () => {
  console.log(styles)
  return (
    <>
      <div className={styles.wrapper}>
        <Heading text='My next.js application' />
      </div>
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