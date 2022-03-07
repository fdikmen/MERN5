import { DECREASE_COUNT, INCREASE_COUNT } from "../actions/actionTypes";
const initialState = {
    count:0
}

export default function counterReducer(state=initialState,action) {
    switch (action.type) {
        case INCREASE_COUNT:
            return {count:state.count + 1}
            case DECREASE_COUNT:
                return {count:state.count - 1}
        default:
            return state;
    }
}