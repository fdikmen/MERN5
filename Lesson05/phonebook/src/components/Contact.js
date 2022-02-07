//Created by "rcc" snippet
import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Contact extends Component {
  render() {
    return <div>
        <h1>Contacts</h1>
        <List/>
        <Form/>
    </div>;
  }
}

export default Contact
