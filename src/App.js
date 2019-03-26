import React, { Component } from 'react';
import {Header, Hero, Destinations, Packages} from './components'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Destinations />
        <Packages />
      </div>
    );
  }
}

export default App;
