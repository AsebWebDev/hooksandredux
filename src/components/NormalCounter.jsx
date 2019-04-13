import React, { Component } from 'react'

class NormalCounter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

  setCountUp = () => {
    this.setState({count: this.state.count  + 1})
  }

  setCountDown = () => {
    this.setState({count: this.state.count  - 1})
  }
  
  render() {
    return (
      <div>
        <h1>I am a normal counter.</h1>
        <button onClick={this.setCountDown}>-</button>
        <h4>{this.state.count}</h4>
        <button onClick={this.setCountUp}>+</button>
      </div>
    )
  }
}

export default NormalCounter