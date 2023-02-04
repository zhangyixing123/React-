const initState = 0;
import { INCREMENT, DECREMENT } from './constant'
export default function createReducer(preState = initState,action) {
    const { type ,data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return initState = 99
    }
}