import { UPDATE_USER,ADD_USER } from "../actions/userAction";


export default function userReducer(state = "", {type,payload}) {
  switch (type) {
    case UPDATE_USER:
      return payload.user;
      case ADD_USER:
      return payload;
    default:
      return state;
  }
}
