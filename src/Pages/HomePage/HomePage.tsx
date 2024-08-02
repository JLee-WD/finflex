import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Columns from '../../Components/Columns/Columns';

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Hero />
      <Columns />
    </>
  );
};

export default HomePage;
