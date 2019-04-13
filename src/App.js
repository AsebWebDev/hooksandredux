import React, { Component } from 'react';
import NormalCounter from './components/NormalCounter'
import HooksCounter from './components/HooksCounter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Mir</h1>
       <NormalCounter />
       <HooksCounter />
      </div>
    );
  }
}

export default App;
