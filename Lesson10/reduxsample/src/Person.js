import React, { Component } from 'react'

export default class Person extends Component {
 state={     name:"Tommy",
     age:25,   
   surname:"Ema",
        job:"Doctor"
 }
    render() {
    return (
      <div>Person
          {this.state.name}
          {this.state.job}
      </div>
    )
  }
}

export  class User extends Component {
    state={  counter:123,
        isActive:true  }
       render() {
       return (
         <div>Person
             {this.state.counter}
             {this.state.isActive}
         </div>
       )
     }
   }
