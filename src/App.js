import React from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SocialMediaList from './SocialMediaList.js'
import MainContainer from './MainContainer';
import './App.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <MainContainer />

        <SocialMediaList instagram="bpotacon" github="cvespa" />
      </header>
    </div>
  );
}

export default App;
