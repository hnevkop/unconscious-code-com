import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import MainImage from './assets/images/logo.jpg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
          <div className="header">
              <div className="logo">
                  <a href=".">UNCONSCIOUS CODE</a>
              </div>
              <div className="social">
                  <a href="https://twitter.com/UnconsciousCod3" title="Twitter" target="_blank" rel="noopener noreferrer">
                      <IconTwitter className="icon"/>
                  </a>
              </div>
          </div>
          <div className="content">
              <div className="title-holder">
                  <h1>UNLEASHING THE CREATIVE POWER OF <span className="highlight">AI</span> AND <span
                      className="highlight">PSYCHOLOGY</span></h1>
                  <p> Innovate Your Dev Workflow. Launching May 2024. Stay Tuned!</p>
                  <img className="image-section" src={MainImage} alt="Unconscious Code"/>
              </div>

              <a href="mailto:hnevkovsky@unconscious-code.com">
                  <div className="cta">Send us an email</div>
              </a>
          </div>
          <div className="footer">
              <span>Prague. Code. Unveiled. ©2024 Unconscious-code</span>
        </div>
      </div>
    );
  }
}

export default App;