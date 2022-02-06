import React, { Component } from 'react';

export default class BlogForm extends Component {
 
    clickButton()
    {
       alert("Button Clicked!")
       console.log("Button runned") 
    }
    render() {
       console.log("Props::",this.props) 
    const appClick = ()=>{
        console.log("Shown from app Clic Func!")
    }
    return <div style={{border:"1px solid red",margin:"20px 10px"}}>
        Form Comp
        <br/>
        <button onClick={this.clickButton}>Send</button>
        <button onClick={appClick}>Send 2</button>
        <button onClick={this.props.blogTestFunc}>Send 3</button>

        </div>;
  }
}
