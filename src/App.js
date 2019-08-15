import React from 'react';
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';

library.add(fab)

class SocialMediaList extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.socials !== undefined && this.props.socials !== null && Array.isArray(this.props.socials)) {
      this.socials = this.props.socials
    } else {
      this.socials = [];
    }

    if (this.props.instagram !== undefined && this.props.instagram !== null) {
      this.socials.push({
        link: "https://instagram.com/" + this.props.instagram,
        icon: "instagram"
      });
    }

    if (this.props.github !== undefined && this.props.github !== null) {
      this.socials.push({
        link: "https://github.com/" + this.props.github,
        icon: "github"
      });
    }
  }

  renderSocialMediaLink(href, image) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", image]} />
      </a>
    )
  }

  renderList(socials) {
    let items = []

    // Outer loop to create items
    if (socials !== undefined && socials !== null && Array.isArray(socials)) {
      for (let i = 0; i < socials.length; i++) {
        let social = socials[i];
        if (social !== undefined && social !== null) {
          //Create the item add the link
          items.push(<li>
            {this.renderSocialMediaLink(social.link, social.icon)}
          </li>)
        }
      }
    }

    return (
      <ul>
        {items}
      </ul>
    ) 
  }

  render() {
    return (
      <div className="social-media-list">
        {this.renderList(this.socials)}
      </div>
    );
  }
}

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

        <SocialMediaList instagram="bpotacon" github="cvespa" />
      </header>
    </div>
  );
}

export default App;
