//Created by "rxreducer" snippet

const initialState = {
  movies:[],
  fetching:false,
  fetched:false,
  error:{}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEW_MOVIES_PENDING":
    return {...state,fetching:true}
    case "NEW_MOVIES_FULFILLED":
      return { ...state, movies: payload,fetching:false,fetched:true };
    case "NEW_MOVIES_REJECTED":
      return {...state,error:payload,fetching:false}
      
    case "UPDATE_MOVIES_PENDING":
      return {...state,fetching:true}
      case "UPDATE_MOVIES_FULFILLED":
        return { ...state, movies: payload,fetching:false,fetched:true };
      case "UPDATE_MOVIES_REJECTED":
        return {...state,error:payload,fetching:false}
    default:
      return state;
  }
}
