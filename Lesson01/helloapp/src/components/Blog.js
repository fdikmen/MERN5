import React, { Component } from "react";
import BlogItem from "./BlogItem";
import PTSample from "./PTSample";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  render() {    
  
    return <div style={{"border":"1px solid yellow","margin":"10px","padding":"10px"}}>
        Blog JS
        {/* <BlogItem desc="Blog One Description"/>
        <BlogItem name="Name props"/>
        <BlogItem name="Name3 props" desc="Blog Three Description"/> */}
      {/* {  blogInfos.map((item,i)=> console.log("DATA::",item.textDesc," Index:",i) )} */}
      {/* <BlogItem count={0} head="Head" desc="Desc"/> */}
<PTSample name="Jo"/>

      {  this.props.data.map((item,i) => <div key={i} >
        <BlogItem count={i} head={item.textHead} desc={item.textDesc}/>
        <h4>Looping</h4>
      </div> )}

    </div>
  }
}

export default Blog