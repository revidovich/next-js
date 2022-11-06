import Link from "next/link";
import Heading from "../../components/Heading";

const Index = () => {
  return (
    <>
      <Heading text='List of users:' />
      <Link href="./users/user">
        User1
      </Link>
    </>
  );
};

export default Index;