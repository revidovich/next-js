import Image from "next/image";
import Heading from "../components/Heading";
import starImg from '../public/logo.png';

const Index = () => {
  return (
    <>
      <Heading text='My next.js application' />
      <Image src={starImg} width='150' height='150' alt='' placeholder="blur"/>
    </>
  );
};

export default Index;