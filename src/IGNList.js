import React from 'react';
import './IGNList.css';

class IGNList extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.igns !== undefined && this.props.igns !== null && Array.isArray(this.props.igns)) {
            this.igns = this.props.igns
        } else {
            this.igns = [];
        }

        this.state = { textIdx: 0 };
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            let currentIdx = this.state.textIdx;
            this.setState({ textIdx: currentIdx + 1 });
        }, 2000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        let textThatChanges = this.igns[this.state.textIdx % this.igns.length];

        return (
            <div className="in-game-name-list">
                <ul>
                    <li>
                        {textThatChanges}
                    </li>
                </ul>
            </div>
        )
    }
}

export default IGNList;