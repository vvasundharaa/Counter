import React, { Component } from 'react';
import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncrease = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  onDecrease = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <div className="counter-buttons">
          <button onClick={this.onIncrease}>Increase</button>
          <button onClick={this.onDecrease}>Decrease</button>
        </div>
        <p className="counter-display">Count: {count}</p>
      </div>
    );
  }
}

export default Counter;
