// Created by "rccp" snippet
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class PTSample extends Component {
  static defaultProps = {surname:"Test Default"}
  static propTypes = { name: PropTypes.string.isRequired,
age:PropTypes.oneOfType([PropTypes.number,PropTypes.bool]),
user:PropTypes.shape({id:PropTypes.number,username:PropTypes.string}) };
  render() {
      let {name,age,user}=this.props;
    return (
      <div style={{ border: "3px dotted gray", padding: "10px" }}>
        {name}-{age} <br/>
        Surname:{this.props.surname}

      </div>
    );
  }
}
