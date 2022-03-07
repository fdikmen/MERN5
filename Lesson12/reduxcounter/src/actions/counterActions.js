import { DECREASE_COUNT, INCREASE_COUNT } from "./actionTypes"


export const increaseCount = ()=>({
    type:INCREASE_COUNT
})

export const decreaseCount = ()=>({
    type:DECREASE_COUNT
})