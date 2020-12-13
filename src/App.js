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
    return <div className="container">
      <button className="button button--outline-grey" id="js-button--cancel" onClick={this.handleDecrementation}>-</button>
      <span>{this.state.counter}</span>
      <button className="button button--green" id="js-button--accept" onClick={this.handleIncrementation}>+</button>
     
    </div>;
  }
}

export default App;
