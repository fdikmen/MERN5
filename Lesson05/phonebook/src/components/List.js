//Created by "rcc" snippet
import React, { Component } from 'react';
import './List.css'

export default class List extends Component {
  render() {
    return <div>
        <input className='filter-input' name="filter" id="filter" 
        placeholder='Filter by name or phone...'>            
        </input>
        <ul className='listField'>
            <li>
                <span className='name'>Name 1</span>
                <span className='phone'>Phone 1</span>
            </li>
            <li>
                <span className='name'>Name 2</span>
                <span className='phone'>Phone 2</span></li>
            <li>
                <span className='name'>Name 3</span>
                <span className='phone'>Phone 3</span></li>
        </ul>
    </div>;
  }
}
