import axios from "axios"
import {API_BASE} from '../config/env'
export const FETCHED_MOVIES = "FETCHED_MOVIES"
export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR"

/*export function fetchMovies() {
    return (dispatch)=>
    {
        axios.get(`${API_BASE}/movies`)
        .then((res)=>res.data)
        .then(data=>dispatch({type:FETCHED_MOVIES,payload:data}))
        .catch(err=>dispatch({type:FETCHED_MOVIES_ERROR,payload:err}))
    }   
}*/

//HTTP METHODS: GET-POST-PUT-DELETE

//With Promise Middleware
export function fetchMovies() {
    return (dispatch)=>
    {
        dispatch({type:"FETCH_MOVIES",payload:axios.get(`${API_BASE}/movies`).then(res=>res.data)})
    }   
}

//With Promise Middleware
export function newMovies({title,cover}) {
    //console.log("MovieAction",title,cover)
    return (dispatch)=>
    {
        dispatch({type:"NEW_MOVIES",payload:axios.post(`${API_BASE}/movies`,{title,cover})
        //.then(res=>console.log("API POST RESULT:",res))})
        .then(res=>res.data)})
    }   
}


//With Promise Middleware
export function getMovie(id) {
    return (dispatch)=>
    {
        dispatch({type:"GET_MOVIE",payload:axios.get(`${API_BASE}/movies/${id}`).then(res=>res.data)})
    }   
}

//With Promise Middleware
export function updateMovies({id,title,cover}) {
    console.log("UPDATE MovieAction",id,title,cover)
    return (dispatch)=>
    {
        dispatch({type:"UPDATE_MOVIES",payload:axios.put(`${API_BASE}/movies/${id}`,{title,cover})
        //.then(res=>console.log("API POST RESULT:",res))})
        .then(res=>res.data)})
    }   
}


//CRUD + GET ALL
//With Promise Middleware
export function deleteMovie(id) {
    console.log("DELETE MovieAction",id)
    return (dispatch)=>
    {
        dispatch({type:"DELETE_MOVIE",
        payload:axios.delete(`${API_BASE}/movies/${id}`).then(res=>Object.assign({},res,{id}))})
    }   
}







