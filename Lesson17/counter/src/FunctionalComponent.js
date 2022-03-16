//Created by "rfce" snippet
import React, { useEffect, useState } from 'react'

function FunctionalComponent() {
 
  const [counter,setCounter] = useState(0)
  const [isVisable,setIsVisable] = useState("Yes")
  const [age,addAge] = useState(20)

  const increase = ()=>{
    setCounter(counter+1)
    setIsVisable("No")

    addAge(30)
  }
  return (
    <div><h1>Functional Component</h1>
    <h2>Count: {counter}</h2>
    <h3>Is Visable ? : {isVisable}</h3>
    <h4>Age : {age}</h4>
    <button onClick={()=>increase()}>increase</button>
    </div>
  )
}

export default FunctionalComponent