import React, { Component } from 'react';
// import main from './img/main.jpg';
import {Header} from './components'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <img src={main} alt="main" /> */}
      </div>
    );
  }
}

export default App;
