import axios from 'axios'
export const UPDATE_USER = 'UPDATE_USER';
export const ADD_USER = 'ADD_USER'
export const GET_USER_ERROR = 'GET_USER_ERROR'
//CRUD--Create-Read-Update-Delete
//Return Object Action
export function updateUser(newUser){
    return {
        type:UPDATE_USER,
        payload:{
            user:newUser
        }
    }
}
// Arrow Func: ()=>{}
// Arrow Func: (x)=>{return "YYYY"}  ----------> x => {"YYYY"}
//Return Function Action
export function getUser(){
    return async dispatch => {
        /*axios.get('https://jsonplaceholder.typicode.com/users/1')
        // .then(res=>console.log(res.data))
        .then(res=>res.data)
        .then(resData=>dispatch(updateUser(resData.name)))
       // .catch(err=>console.log(err.message))
        .catch(err=>dispatch(showError(err.message)))*/
        try {
            const result =await axios.get('https://jsonplaceholder.typicode.com/users/1');
            dispatch(updateUser(result.data.name))
        } catch (error) {
            dispatch(showError(error.message))
        }
    }
}

export function showError(errText){
    return {
        type:GET_USER_ERROR,
        payload:{
            error:errText
        }
    }
}

export function addUser(newUser){
    return{
        type:ADD_USER,
        payload:{
            user:newUser
        }
    }
}

