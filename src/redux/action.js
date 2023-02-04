import { INCREMENT, DECREMENT } from './constant'
// 创建加法
export const createIncrementAction = data => ({type:INCREMENT,data})

export const createDecrementAction = data =>({type:DECREMENT,data})
// 创建异步加法
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time);
    }
}

export const createDecrementAsyncAction = (data,time) => {
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(createDecrement(data))
        }, time);
    }
}