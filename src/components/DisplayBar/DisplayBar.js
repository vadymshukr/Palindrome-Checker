import React from 'react';
import './DisplayBar.css';

const PalindromeMessage = props => {
    return (
        <div>
            {props.palindromeCheck
            ?
            <p>Congrats! {props.content} is Palindrome!</p>
            :
            <p>Sorry! {props.content} is not Palindrome!</p>
        }
        </div>
    )
}

class DisplayBar extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.content}</p>
                {this.props.displayContent &&
                <PalindromeMessage palindromeCheck={this.props.palindromeCheck} content={this.props.content}/>
                }
            </div>
        )
    }
}

export default DisplayBar; 