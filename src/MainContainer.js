import React from 'react';
import AskBar from './AskBar'
import QuestionContainer from './QuestionContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleAsk = this.handleAsk.bind(this);
        this.state = {
            content: []
        };
    }

    handleAsk(question) {
        console.log(question);
        let content = this.state.content;
        content.push({
            tabTitle: "Question asked at: " + new Date(),
            content: question
        })
        if (content.length > 5) {
            content.shift();
        }
        console.log(content);

        this.setState({
            content: content
        });
    }

    render() {
        return (
            <>
                <QuestionContainer questions={this.state.content} />
                <AskBar onAsk={this.handleAsk} />
            </>
        );
    }
}

export default MainContainer