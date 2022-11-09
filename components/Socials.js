import Head from "next/head";
import Image from "next/image";

const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
      </Head>
      {/* <ul>
        {socials && socials.map(({ id, img, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <Image src={img} width='32' height='32' alt='' />
            </a>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Socials;