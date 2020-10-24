import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SocialMediaList from './SocialMediaList.js'
import './App.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Battle Programmer Otacon</p>
      </header>
      <div className="App-content">
        <p>cvespa</p>
      </div>
      <footer className="App-footer">
        <SocialMediaList instagram="bpotacon" github="cvespa" minecraft="bpotacon" />
      </footer>
    </div>
  );
}

export default App;
