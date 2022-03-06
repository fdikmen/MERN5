//Created by "rcredux" snippet
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser, addUser,getUser } from "../actions/userAction";

export class User extends Component {
  state={inputValue:""}
  render() {
    const onUpdateUser = () => {
      //this.props.dispatch(updateUser(name))
      this.props.updateUser(this.state.inputValue);
    };
    const updateInputValue = (evt)=>{this.setState({inputValue:evt.target.value})}
    const onGetUser = ()=>{this.props.getUser();}
    console.log("User Comp.Props:", this.props,this.state);
    return (
      <div>
        User Reducer(User State): {this.props.userReducer}
        <hr />
<input value={this.state.inputValue} onChange={updateInputValue}/>
        <button onClick={onUpdateUser}>Change The Name</button>
        <hr/>
        <button onClick={onGetUser}>Get User FROM API</button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  //console.log("mapStateToProps-State",state," mapStateToProps-Props",props)
  return state;
};

const mapDispatchToProps = {
  updateUser,
  addUser,
  getUser
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log("-------MERGE PROPS--------------");
  console.log("States/Reducers=>", propsFromState);
  console.log("Actions/Dispatch=>", propsFromDispatch);
  console.log("Own Props=>", ownProps);
  return {};
};

//export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(User)
export default connect(mapStateToProps, mapDispatchToProps)(User);
