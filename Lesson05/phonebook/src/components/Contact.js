//Created by "rcc" snippet
import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Contact extends Component {
  state={
    contacts:[{name:"Name 1",phone:"+123456789"},
    {name:"Name 2",phone:"+123456780"},
    {name:"Name 3",phone:"+123456781"},
    {name:"Name 4",phone:"+123456782"},
    {name:"Name 5",phone:"+123456783"}]
  }
  render() {
    return <div>
        <h1>Contacts</h1>
        <List contacts={this.state.contacts}/>
        <Form/>
    </div>;
  }
}

export default Contact
