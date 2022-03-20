import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'
import User from './User'

function UserList() {
   // console.log("UserList Props",changeColor,users)
   const {users} = useContext(UserContext)
   //console.log("User List Comp. Context Data:",contextData)
  return (
    <div>UserList
        {/* <User changeColor={changeColor} user={users[0]}/> */}
        {users.map((user)=>(
            <User key={user.id} user={user}/>
        ))}
    </div>

  )
}

export default UserList