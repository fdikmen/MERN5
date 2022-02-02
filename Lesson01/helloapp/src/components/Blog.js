import React, { Component } from "react";
import BlogItem from "./BlogItem";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  render() {
    return <div>
        Blog JS
        <BlogItem/>
        <BlogItem/>
        <BlogItem/>
    </div>
  }
}

export default Blog