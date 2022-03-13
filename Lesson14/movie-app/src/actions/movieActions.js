import axios from "axios"
export const FETCHED_MOVIES = "FETCHED_MOVIES"

export function fetchMovies() {
    return (dispatch)=>
    {
        axios.get("https://622e2a578d943bae348ffd22.mockapi.io/movies")
        .then((res)=>res.data)
        .then(data=>dispatch({type:FETCHED_MOVIES,payload:data}))
        .catch(err=>console.error(err))
    }
    
}



