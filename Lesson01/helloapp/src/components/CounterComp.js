import React, { Component } from "react";

export default class CounterComp extends Component {
  state = { number: 0 };
  //   incrementState=()=>{this.setState({number:this.state.number+1})}
  incrementState = () => {
    this.setState({ number: ++this.state.number });
  };
  decrementState = () => {
    this.setState({ number: this.state.number - 1 });
  };
  render() {
    return (
      <div>
        CounterComp
        <hr />
        Counter : {this.state.number} <br />
        <button onClick={this.decrementState}>-</button>
        <button onClick={this.incrementState} style={{ marginLeft: "5px" }}>
          +
        </button>
      </div>
    );
  }
}
