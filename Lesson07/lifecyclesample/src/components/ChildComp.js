import React, { Component } from 'react'

export default class ChildComp extends Component {
     //Created by "rconst" snippet
  constructor() {
    super();
    console.log("Child-Constructor runned.");
  }
  
  componentWillMount() {
    console.log("Child-componentWillMount runned.");
  }
  //Created by "cdm" snippet
  componentDidMount() { 
    console.log("Child-componentDidMount runned.");
   }

   componentWillReceiveProps(nextProps)
   {
    console.log("Child-componentWillReceiveProps runned.New Data:",nextProps);
   }
  render() {
      console.log("Child-Rendered.")
    return (
      <div>ChildComp
          <hr/>
          <h5>{this.props.newname}</h5>
          <button onClick={this.props.changeName}>Change The Name</button>
      </div>
    )
  }
}
