import React from 'react';

class AskBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: (this.props.question !== undefined && this.props.question !== null ? this.props.question : '')
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAsk = this.handleAsk.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        console.log(this.state.question);
        if (this.props.onAskChange !== undefined && this.props.onAskChange !== null) {
            this.props.onAskChange(e.target.value);
        } 
        this.setState({
            question: e.target.value
        })    
        console.log(this.state.question);
    }

    handleAsk(e){
        console.log(e, this.state.question);
        if (this.props.onAsk !== undefined && this.props.onAsk !== null) {
            this.props.onAsk(this.state.question);
        }   
    }

    handleKeyPress(e) {
        console.log(e, this.state.question);
        if(e.key === 'Enter'){
            if (this.props.onAsk !== undefined && this.props.onAsk !== null) {
                this.props.onAsk(this.state.question);
            }
        }
    }

    render() {
        return (            
            <div>
                <fieldset>
                    <legend>Ask A Question:</legend>
                    <input value={this.state.question} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                    <button onClick={this.handleAsk}>Ask</button>
                </fieldset>
            </div>            
        );
    }
}

export default AskBar