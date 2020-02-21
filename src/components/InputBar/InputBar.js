import React from 'react';
import './InputBar.css';
import DisplayBar from '../DisplayBar/DisplayBar';
import palindrome from '../../util/helperFunctions/palindrome'

class InputBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content: '',
            displayContent: false,
            palindromeCheck: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event){
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(event){
        this.setState({displayContent: true})
        if (palindrome(this.state.content)){
            this.setState({palindromeCheck: true})
        } else {
            this.setState({palindromeCheck: false})
        };
        event.preventDefault();        
    }

    handleReset(event){
        this.setState({
            content: '',
            displayContent: false,
            palindromeCheck: false
        })
    }

    render(){
        return (
            <div className="main">
                <h2 className="form-header">Enter the word</h2>
                <form className="form" action="" onSubmit={this.handleSubmit}>
                    <input className="form__input" type="text" name="content" value={this.state.value} onChange={this.handleChange}/>
                    <input className="form__submit button" type="submit" value="Submit"/>
                    <input className="form__reset button" type="reset" value="Reset" onClick={this.handleReset} />
                </form>
                <DisplayBar content={this.state.content} displayContent={this.state.displayContent} palindromeCheck={this.state.palindromeCheck}/>
            </div> 
        )
    }
}

export default InputBar;