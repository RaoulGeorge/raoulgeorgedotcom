import React from 'react';
import Intro from './../../components/Intro';
import Contact from './../../components/Contact';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
