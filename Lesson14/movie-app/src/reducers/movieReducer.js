import { FETCHED_MOVIES } from "../actions/movieActions";

//Created by "rxreducer" snippet

const initialState = {
  movies:[],
  fetching:false,
  fetched:false,
  error:{}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_MOVIES:
      return { ...state, name: payload };
    default:
      return state;
  }
}
