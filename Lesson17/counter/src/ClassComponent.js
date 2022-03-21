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

    state={ counter:0,
      isVisable:"Yes"
      ,timer:0 }

    increase = () =>{
        this.setState({counter:this.state.counter +1
            ,isVisable:"No"})
    }
    componentDidMount() { 
     // console.log("componentDidMount runned.")
     this.myTimer = setInterval(()=>{
       this.setState({timer:this.state.timer + 1})
     },1000)
     }
    componentDidUpdate(prevProps, prevState) { 
     // console.log("componentDidUpdate runned.")
     console.log("Timer: ",this.state.timer)
    } 

    componentWillUnmount() {
      clearInterval(this.myTimer)
     }
    
  render() {
    
    return (
      <div><h1>Class Component</h1>
      <h2>Count: {this.state.counter}</h2>
      <h3>Is Visable ? : {this.state.isVisable}</h3>
      <h4>Timer :: {this.state.timer}</h4>
      <button onClick={()=>this.increase()}>increase</button>
      </div>
    )
  }
}

export default ClassComponent