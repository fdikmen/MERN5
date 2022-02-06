import React, { Component } from 'react';

export default class SampleConst extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("Run Constructor")
      console.log("Props::",props)
      console.log("Props 01::",props.value1)
    }
  render() {      
    let subTitleCss ={
        border:"1px dotted red",
        "marginLeft":"40px",
    backgroundColor:"DodgerBlue",
fontFamily:"Arial"}
    return <div style={{border:"1px solid green"}}>
        <h1 style={{color:"red"}}>New Component</h1>
        <h2 style={{"color":"yellow"}}>Sub Title</h2>
        <h3 style={subTitleCss}>Sub Sub Title</h3>
        </div>;
  }
}
