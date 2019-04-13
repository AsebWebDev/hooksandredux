import React, { Component } from 'react'

export default class NormalLife extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    document.title = `its ${this.state.count} clicked`
  }

  componentDidUpdate() {
    document.title = `its ${this.state.count} clicked`
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>normal</h1>
        <h5>{this.state.count}</h5>
        <button onClick={this.clickHandler}>+</button>
      </div>
    )
  }
}
