import React from 'react';
import './App.css';
import InputBar from '../InputBar/InputBar';

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <h1>Palindrome Checker</h1>
        <InputBar />
      </div>
    );
  }
}

export default App;
