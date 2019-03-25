import React, { Component } from 'react';
import {Header, Hero, Destinations} from './components'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Destinations />
      </div>
    );
  }
}

export default App;
