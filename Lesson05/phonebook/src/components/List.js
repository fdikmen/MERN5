//Created by "rcc" snippet
import React, { Component } from "react";
import "./List.css";
import PropsTypes from 'prop-types'

export default class List extends Component {
    static propTypes = {
        contacts:PropsTypes.array.isRequired
    }
    state={filterText:''}
  render() {
    // console.log(this.props);
    const onChangeFilter = (e)=>{
      //console.log(e.target.value)
      this.setState({filterText:e.target.value})
      console.log("State::",this.state)
    }
    const filteredContacts = this.props.contacts.filter(
      item=>{
        //console.log("item:",item," Result:",item.name.indexOf(this.state.filterText) !== -1)
        return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1 
        ||  item.phone.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1}
    )
    return (
      <div>

        <input
        onChange={onChangeFilter}
        value={this.state.filterText}
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        ></input>

        <ul className="listField">
          {filteredContacts.map((item,index) => {
            return (
              <li key={index}>
                <span className="name">{item.name}</span>
                <span className="phone">{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
