import React from 'react';
import './intro.scss';

const Intro = () => {
  return (
    <div className="intro">
      <h2>Hello world</h2>
      <h2>My name is Raoul George</h2>
      <div className="iama">
        <div className="static">
          <h2>I am a</h2>
        </div>
        <ul className="effect-container">
          <li className="effect-item">
            <h2>web developer</h2>
          </li>
          <li className="effect-item">
            <h2>family man</h2>
          </li>
          <li className="effect-item">
            <h2>warcraft addict</h2>
          </li>
          <li className="effect-item">
            <h2>hardcore kopite</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
