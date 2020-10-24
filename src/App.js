import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SocialMediaList from './SocialMediaList.js'
import './App.css';
import IGNList from './IGNList.js';

library.add(fab);

let igns = ["Battle Programmer Otacon", "bpotacon", "cvespa"]
let games = [{
  name: "Minecraft",
  link: "https://www.minecraft.net/en-us/store/minecraft-java-edition",
  skin: "https://crafatar.com/avatars/b5714800-1c21-40e9-8b5c-161e69b6cffc?overlay=true"
}];
let socials = [{
  link: "https://instagram.com/bpotacon",
  icon: "instagram"
}, {
  link: "https://github.com/cvespa",
  icon: "github"
}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IGNList igns={igns}/>
      </header>
      <div className="App-content">

      </div>
      <footer className="App-footer">
        <SocialMediaList games={games} socials={socials}/>
      </footer>
    </div>
  );
}

export default App;
