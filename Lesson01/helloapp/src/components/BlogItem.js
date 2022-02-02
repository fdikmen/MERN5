import React, { Component } from 'react';

export default class BlogItem extends Component {
  render() {
    console.log(this.props)
    const {head,count,desc} = this.props;
    return <div className='blogItem'>
      <i className='blogTitle'>{head}</i>
      <br/>
      <hr/>
    {count} - {desc}
    </div>
  }
}
