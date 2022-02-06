import React, { Component } from "react";
import BlogItem from "./BlogItem";
import PTSample from "./PTSample";
import SampleConst from "./SampleConst";
import BlogForm from "./BlogForm";
import StateSampleComp from "./StateSampleComp";
import CounterComp from "./CounterComp";

/*class Blog extends React.Component
{

}*/

class Blog extends Component {
  blogTestFunc(){
      alert("From Blog Comp.")
  }
  render() {
    let name="Tommy";
    let age=27;
    let person = {id:"Test",username:"Ema"}
   

    return (
      <div
        style={{ border: "1px solid yellow", margin: "10px", padding: "10px" }}
      >
        Blog JS
        <CounterComp/>
        {/* <StateSampleComp/> */}
      {/* <BlogForm blogTestFunc={this.blogTestFunc} name="Tommy"/> */}

        {/* <BlogItem desc="Blog One Description"/>
        <BlogItem name="Name props"/>
        <BlogItem name="Name3 props" desc="Blog Three Description"/> */}
        {/* {  blogInfos.map((item,i)=> console.log("DATA::",item.textDesc," Index:",i) )} */}
        {/* <BlogItem count={0} head="Head" desc="Desc"/> */}
        
        {/* <SampleConst value1="88" value2="Test"/> */}
        {/* <PTSample user={person} name={name} age={age} surname="Emma"/> */}


        {/* {this.props.data.map((item, i) => (
          <div key={i}>
            <BlogItem count={i} head={item.textHead} desc={item.textDesc} />
            <h4>Looping</h4>
          </div>
        ))} */}
      </div>
    );
  }
}

export default Blog;
