import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
