import React from 'react';
import Heading from '../components/Heading';

const Error = () => {
  return (
    <>
      <Heading text='404' />
      <Heading tag='h2' text='Страница по данному адресу не существует' />
    </>
  );
};

export default Error;