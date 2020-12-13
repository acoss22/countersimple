import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleIncrementation = this.handleIncrementation.bind(this);
    this.handleDecrementation = this.handleDecrementation.bind(this);
  }

  handleDecrementation() {
    this.setState({ counter: this.state.counter - 1 });
  }
  handleIncrementation() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return <div>
      <button onClick={this.handleDecrementation}>-</button>
      <button onClick={this.handleIncrementation}>+</button>
      <span>{this.state.counter}</span>
    </div>;
  }
}

export default App;
