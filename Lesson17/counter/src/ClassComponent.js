//Created by "rce" snippet
import React, { Component } from 'react'

export class ClassComponent extends Component {
    /*
    //rconst
    constructor(){
        super();
        this.state={
            counter:0
        }
    }*/

    state={ counter:0,isVisable:"Yes" }

    increase = () =>{
        this.setState({counter:this.state.counter +1
            ,isVisable:"No"})
    }
    
  render() {
    
    return (
      <div><h1>Class Component</h1>
      <h2>Count: {this.state.counter}</h2>
      <h3>Is Visable ? : {this.state.isVisable}</h3>
      <button onClick={()=>this.increase()}>increase</button>
      </div>
    )
  }
}

export default ClassComponent