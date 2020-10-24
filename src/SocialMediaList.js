import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialMediaList.css';

class SocialMediaList extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.games !== undefined && this.props.games !== null && Array.isArray(this.props.games)) {
            this.games = this.props.games
        } else {
            this.games = [];
        }

        if (this.props.socials !== undefined && this.props.socials !== null && Array.isArray(this.props.socials)) {
            this.socials = this.props.socials
        } else {
            this.socials = [];
        }
    }

    renderGameIcon(name, href, skin) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img className="game" src={skin} alt={name} />
            </a>
        )
    }

    renderSocialMediaLink(href, icon) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={["fab", icon]} />
            </a>
        )
    }

    renderList(games, socials) {
        let items = []

        // Outer loop to create items
        if (games !== undefined && games !== null && Array.isArray(games)) {
            for (let i = 0; i < games.length; i++) {
                let game = games[i];
                if (game !== undefined && game !== null) {
                    //Create the item add the link
                    items.push(<li key={i}>
                        {this.renderGameIcon(game.name, game.link, game.skin)}
                    </li>)
                }
            }
        }

        if (socials !== undefined && socials !== null && Array.isArray(socials)) {
            for (let i = 0; i < socials.length; i++) {
                let social = socials[i];
                if (social !== undefined && social !== null) {
                    //Create the item add the link
                    items.push(<li key={i}>
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
                {this.renderList(this.games, this.socials)}
            </div>
        );
    }
}

export default SocialMediaList;