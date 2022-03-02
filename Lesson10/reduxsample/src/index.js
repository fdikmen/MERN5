import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';


const myStore = createStore(rootReducer,
  {
  productReducer:[{name:'Sony',type:'Mp3 Player'}],
  myReducer:'First Text'},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );//Create your store
//console.log("Old State:",myStore.getState())
/*
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
//console.log("Last State:",myStore.getState())

const action3={
  type:'userUpdate',
  payload:{user:'Tommy'}
}
myStore.dispatch(action3)
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
