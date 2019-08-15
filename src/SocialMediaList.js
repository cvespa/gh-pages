import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

export default SocialMediaList;