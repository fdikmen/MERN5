import React, { Component } from "react";
import axios from "axios";
import API from '../api'
export default class PersonList extends Component {
  state = { persons: [], error: null };
  componentDidMount() {
   API
      .get("users")
      .then((res) => {
        this.setState({ persons: res.data });
      })
      .catch((err) => this.setState({error:err}));
  }
  render() {
    const viewData =
      <ul>
        {this.state.persons.length > 0
          ? this.state.persons.map((person) => (
              <li style={{ fontSize: "10px" }} key={person.id}>
                {person.id}.{person.name}
              </li>
            ))
          : "No data..."}
      </ul>
    
    return (
      <div>
        PersonList
        <hr/>
        {this.state.error === null
        ? viewData
    : <h5 style={{"color":"red"}}>Error in API Call</h5>}
      </div>
    );
  }
}
