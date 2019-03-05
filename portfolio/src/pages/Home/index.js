import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div class="home">
      <a
        className="linkedin-link"
        href="https://www.linkedin.com/in/raoulgeorge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>
      <a className="blog-link" href="https://buzzjs.blogspot.com/" target="_blank" rel="noopener noreferrer">
        My Blog
      </a>
      <a className="github-link" href="https://github.com/RaoulGeorge" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  );
};

export default Home;
