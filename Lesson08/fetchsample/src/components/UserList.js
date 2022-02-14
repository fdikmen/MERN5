import React, { Component } from 'react'

export default class UserList extends Component {
    state={users:[],age:2}
    constructor() {
      super()
      fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({users:data}))
    }
  render() {
      console.log("State Values: ",this.state)
    return (
      <div><h3>User List</h3>
      {this.state.users.map(item=><div key={item.id}>
        {item.id}.{item.name} {item.surname}
      </div>)}
      </div>
    )
  }
}
