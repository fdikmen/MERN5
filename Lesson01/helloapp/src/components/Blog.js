import React, { Component } from "react";
import BlogItem from "./BlogItem";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  render() {
    return <div>
        Blog JS
        <BlogItem desc="Blog One Description"/>
        <BlogItem name="Name props"/>
        <BlogItem name="Name3 props" desc="Blog Three Description"/>
    </div>
  }
}

export default Blog