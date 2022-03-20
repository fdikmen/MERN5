import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

function User({user}) {
    //console.log("User Component Props" , user,changeColor)
    const {changeColor} = useContext(UserContext)
    //console.log("Context data :",changeColor)
  return (
    <div style={{background:user.color,padding:"5px",borderBottom:"1px solid"}}>
       <h3>Name : {user.name}</h3>
       <p>Email : {user.email}</p>
       <p>Age : {user.age}</p>
       <p>Color : {user.color}</p>
       New Color : 
<input value={user.color} onChange={e=>changeColor(user.id,e.target.value)}/>
    </div>
  )
}

export default User