import React, { Component } from 'react';

export default class Form extends Component {
  render() {
      const formInputStyle={marginTop: "10px",
        height: "30px",
        lineHeight: "25px",
        width: "400px",
        textIndent: "10px"}
    return <div>
        <form style={{width:"400px",margin:"0 auto",padding:"0"}}>
            <input style={formInputStyle} name="name" id="name" placeholder='Enter a name...'></input>
            <br/>
            <input style={formInputStyle} name="phone" id="phone" placeholder='Enter a phone...'></input>
        <button>Add</button>
        </form>
    </div>;
  }
}
