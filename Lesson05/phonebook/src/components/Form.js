import React, { Component } from "react";

export default class Form extends Component {
  state = { name: "", phone: "" };
  /*constructor(props) {
    super(props);
    this.onChangeFunc = this.onChangeFunc.bind(this);
  }
  onChangeFunc(e) {
    console.log("Writing....",e.target.value);
    if(e.target.name==='name'){
      this.setState({name:e.target.value})
    }
    if(e.target.name==='phone'){
      this.setState({phone:e.target.value})
    }
    this.setState({[e.target.name]:e.target.value})
  }*/
  render() {
    const onChangeFunc=(e)=> {     this.setState({[e.target.name]:e.target.value})    }
    const formInputStyle = {
      marginTop: "10px",
      height: "30px",
      lineHeight: "25px",
      width: "400px",
      textIndent: "10px",
    };
    return (
      <div>
        <form style={{ width: "400px", margin: "0 auto", padding: "0" }}>
          <input
            style={formInputStyle}
            value={this.state.name}
            onChange={onChangeFunc}
            name="name"
            id="name"
            placeholder="Enter a name..."
          ></input>
          <br />
          <input
            style={formInputStyle}
            value={this.state.phone}
            onChange={onChangeFunc}
            name="phone"
            id="phone"
            placeholder="Enter a phone..."
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
