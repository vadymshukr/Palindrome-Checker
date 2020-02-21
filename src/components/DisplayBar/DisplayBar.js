import React from 'react';
import './DisplayBar.css';

const PalindromeMessage = props => {
    return (
        <div>
            {props.palindromeCheck
            ?
            <p className="success message">Congrats! {props.content} is Palindrome!</p>
            :
            <p className="fail message">Sorry! {props.content} is not Palindrome!</p>
        }
        </div>
    )
}

class DisplayBar extends React.Component{
    render(){
        return (
            <div>
                {this.props.displayContent &&
                <PalindromeMessage palindromeCheck={this.props.palindromeCheck} content={this.props.content}/>
                }
            </div>
        )
    }
}

export default DisplayBar; 