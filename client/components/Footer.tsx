import { FC } from 'react';
import Image from "next/image";
import styles from '../styles/Footer.module.scss';
import IconGh from '../svg/gh';
import IconGl from '../svg/gl';
import IconTg from '../svg/tg';
import IconTw from '../svg/tw';
import IconNx from '../svg/nx';
import { GetStaticProps } from 'next';

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const Footer:FC = () => {
  return (
    <footer className={styles.footer}>
      <a href='https://t.me/revidovich' target="_blank" rel="noreferrer">
        <IconTg />
        {/* <Image src={IconTg} /> */}
      </a>
      <a href='https://github.com/revidovich' target="_blank" rel="noreferrer">
        <IconGh />
      </a>
      <a href='https://gitlab.dsgrad.devops.lanit-tercom.com/arevidovich' target="_blank" rel="noreferrer">
        <IconGl />
      </a>
      <a href='https://twitter/arevidovich' target="_blank" rel="noreferrer">
        <IconTw />
      </a>
      <a href='https://nextjs.org' target="_blank" rel="noreferrer">
        <IconNx />
      </a>
    </footer>
  );
};

export default Footer;