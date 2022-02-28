import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux'

function myReducer(state,action){
  //console.log("State:",state," Action:",action)
  if (action.type === 'changeTheState') {
    return action.payload.newState
  } 
  return "State Text"}

  function userReducer(state="",action){ return state  }  
  function productReducer(state=[],action){return state  }

  const rootReducer = combineReducers(
    { userReducer, productReducer, myReducer });

const myStore = createStore(rootReducer,
  {
  productReducer:[{name:'Sony',type:'Mp3 Player'}],
  myReducer:'First Text'}
  );//Create your store
//console.log("Old State:",myStore.getState())

const action={
  type:'changeTheState',//uniqe Id
  payload:{newState:'My new State'}
}
const action2={
  type:'changeTheState',//uniqe Id
  payload:{newState:'My new State 2'}
}

myStore.subscribe(()=>{
  //console.log("subscribe runned.-Store Updated.",myStore.getState())
})

myStore.dispatch(action)
//console.log("Last State:",myStore.getState())

myStore.dispatch(action2)
console.log("Last State:",myStore.getState())



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
