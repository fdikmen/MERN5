// Created by "rccp" snippet
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PTSample extends Component {
  
static propTypes={name:PropTypes.number};
  render() {
    return <div>{this.props.name}</div>;
  }
}
