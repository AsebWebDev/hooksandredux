import React, { Component } from 'react';
import NormalCounter from './components/NormalCounter'
import HooksCounter from './components/HooksCounter'
import HooksLife from './components/HooksLife'
import NormalLife from './components/NormalLife'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Mir</h1>
       <NormalCounter />
       <HooksCounter />
       {/* <NormalLife /> */}
       <HooksLife />
      </div>
    );
  }
}

export default App;
