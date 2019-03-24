import React, { Component } from 'react';
import main from './img/main.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <img src={main} alt="main" />
      </div>
    );
  }
}

export default App;
