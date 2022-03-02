//Created by "rcredux" snippet
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {updateUser,addUser} from '../actions/userAction'

export class User extends Component {

  render() {
    const onUpdateUser = (name)=>
    {
      //this.props.dispatch(updateUser(name))
      this.props.updateUser(name)
    }
      console.log("User Comp.Props:",this.props)
    return (
      <div>User: {this.props.userReducer.user}
      
<button onClick={onUpdateUser("Tommy")}>Change The Name</button>

      </div>
    )
  }
}
const mapStateToProps = (state,props) =>{
  //console.log("mapStateToProps-State",state," mapStateToProps-Props",props)
    return state;
}

const mapDispatchToProps = {
  updateUser,addUser
}

const mergeProps = (propsFromState,propsFromDispatch,ownProps) =>
{
  console.log("-------MERGE PROPS--------------")
  console.log("States/Reducers=>",propsFromState)
  console.log("Actions/Dispatch=>",propsFromDispatch)
  console.log("Own Props=>",ownProps)
  return {}
}

//export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(User)
export default connect(mapStateToProps,mapDispatchToProps)(User)
