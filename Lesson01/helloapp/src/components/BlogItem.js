import React, { Component } from 'react';

export default class BlogItem extends Component {
  render() {
    console.log(this.props)
    return <div className='blogItem'>
      <i className='blogTitle'>Blog Item JS</i>
    <br/>
    DESC PROPS: {this.props.desc}<hr/>
    NAME PROPS:{this.props.name}
    </div>;
  }
}
