import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import axios from 'axios';
import promise from 'redux-promise-middleware'


const allEnhancers = compose(
  applyMiddleware(thunk,promise,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//createStore(Reducer , InitialData , Extension)
const myStore = createStore(rootReducer,
  {
  productReducer:[{name:'Sony',type:'Mp3 Player'}],
  myReducer:'First Text'},
  allEnhancers
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

/*myStore.dispatch(dispatch=>{
  dispatch({type:'FETCH_POSTS_START'})
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res=>res.data)
  .then(data=>dispatch({
    type:'RECEIVE_POSTS',
    payload:data
  }))
  .catch(err=>dispatch({
    type:'FETCH_POSTS_ERROR',
    payload: err
  }))
})*/
// XXXX_PENDING XXXX_FULFILLED XXXX_REJECTED
myStore.dispatch({
  type:"CUSTOMTYPE",
  payload: axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(r=>r.data)
})

myStore.dispatch({
  type:"USER",
  payload: axios.get('https://jsonplaceholder.typicode.com/users')
  .then(r=>r.data)
})

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
