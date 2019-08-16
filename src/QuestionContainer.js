import React from 'react';

class QuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions
        };        
    }

    renderContent(questions) {
        let items = [];
        // Outer loop to create items
        if (questions !== undefined && questions !== null && Array.isArray(questions)) {
            for (let i = 0; i < questions.length; i++) {
                let question = questions[i];
                if (question !== undefined && question !== null) {
                    items.push(
                        <>
                            <div>
                                {question.tabTitle + ": " + question.content} 
                            </div>
                        </>
                    )
                }
            }
        }

        return (
            <>
                {items}
            </>
        )
    }

    render() {
        return (
            <div>
                Question Container
                {this.renderContent(this.state.questions)}
            </div>            
        );
    }
}

export default QuestionContainer;