//Created by "rcc" snippet
import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class Contact extends Component {
  state = {
    contacts: [
      { name: "Name 1", phone: "+123456789" },
      { name: "Name 2", phone: "+123456780" },
      { name: "Name 3", phone: "+123456781" },
      { name: "Name 4", phone: "+123456782" },
      { name: "Name 5", phone: "+123456783" },
    ],
        age:12
  };
  render() {
    const addContact = (data) => {
      console.log("PARENT-2-addContact Params:",data);
      const contactsData = this.state.contacts
      //console.log("Contacts Old:::",contacts)
      contactsData.push(data)
      //console.log("Contacts New:::",contacts)
      //this.setState({contacts:contacts})
      this.setState({contacts:contactsData})
    };
    //console.log("Contact.JS STATE:::",this.state)
 const chgnState = () => {this.setState({age:21})  };
    return (
      <div>
        <h1>Contacts</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
        {/* <button onClick={chgnState}>Change Contact.js State</button> */}
      </div>
    );
  }
}

export default Contact;
