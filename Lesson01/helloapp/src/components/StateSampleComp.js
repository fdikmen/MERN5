import React, { Component } from 'react';

export default class StateSampleComp extends Component {
  constructor(props) {
    super(props)
  console.log("Comp created.")
    // this.state = {
    //    name:"Tommy",
    //    age:21
    // }
    this.setState({count:1});
  }
state = {name:"Tommy",age:21,count:0}

    render() {

const changedFunc = ()=>
{this.setState({count:1,name:"Changed Tommy "+
Math.floor(Math.random()*4)});} 

  let surname="XXX YYYY";
    return <div>StateSampleComp <hr/>
        Name: {this.state.name}<br/>
        Age: {this.state.age}
    - Surname: {surname} <hr/>
    Count : {this.state.count} <br/>
    <button onClick={changedFunc}>+</button>
    </div>;
  }
}
