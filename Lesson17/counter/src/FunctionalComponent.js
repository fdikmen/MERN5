//Created by "rfce" snippet
import React, { useEffect, useState } from 'react'

function FunctionalComponent() {
 
  const [counter,setCounter] = useState(0)
  const [isVisable,setIsVisable] = useState("Yes")
  const [age,addAge] = useState(20)
  const [timer,setTimer] = useState(0)

  const increase = ()=>{
    setCounter(counter+1)
    setIsVisable("No")
    addAge(30)
  }
//componentDidMount+componentDidUpdate
useEffect(() => {
  console.log("Merge for componentDidMount & componentDidUpdate")
})

//componentWillUnMount
  useEffect(() => {
  console.log("UseEffect for componentDidMount")
  const myTimer = setInterval(()=>{
    setTimer(timer=>timer + 1)
  },1000)
  return () => clearInterval(myTimer) //useEffect cleanup function == componentWillUnmount
},[])



//componentDidUpdate
useEffect(() => {
  console.log("UseEffect for componentDidUpdate")
  console.log("Timer:", timer)
},[counter,age,timer])




  return (
    <div><h1>Functional Component</h1>
    <h2>Count: {counter}</h2>
    <h3>Is Visable ? : {isVisable}</h3>
    <h4>Age : {age}</h4>
    <h4>Timer : {timer}</h4>
    <button onClick={()=>increase()}>increase</button>
    </div>
  )
}

export default FunctionalComponent