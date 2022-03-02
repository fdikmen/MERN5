export default function myReducer(state, action) {
  //console.log("State:",state," Action:",action)
  if (action.type === "changeTheState") {
    return action.payload.newState;
  }
  return "State Text";
}
