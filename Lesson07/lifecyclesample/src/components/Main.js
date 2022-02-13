//Created by "rcc" snippet
import React, { Component } from "react";
import ChildComp from "./ChildComp";

export default class Main extends Component {
  state = { name: "Eren" };
  //Created by "rconst" snippet
  constructor(props) {
    super(props);
    console.log("Main-Constructor runned.");
    //console.log("Const.Props: ",props)
    this.state = { name: "Furkan" };
  }
  
  componentWillMount() {
    console.log("Main-componentWillMount runned.");
    this.setState({name:"Ayşe"})
  }
  //Created by "cdm" snippet
  componentDidMount() { 
    console.log("Main-componentDidMount runned.");
    setTimeout(() => {
        this.setState({name:"Caner"})
    //console.log("setState runned in componentDidMount.");
    }, 2000);
   }

   changeName =()=>{
       this.setState({name:"New Furkan"})
   }

  render() {
    console.log("Main-Render.");
    return (
      <div>
        Main
        <h5>{this.state.name}</h5>
        <ChildComp newname={this.state.name} changeName={this.changeName}/>
      </div>
    );
  }
}
