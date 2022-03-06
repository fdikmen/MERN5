import { UPDATE_USER,ADD_USER,GET_USER_ERROR } from "../actions/userAction";


export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
    case ADD_USER:
      return payload;
    case GET_USER_ERROR:
      return payload.error
    default:
      return state;
  }
}
