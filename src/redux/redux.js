import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

//액션객체
export const addToCart = (options, quantity, id) => {
    return {
        type: "addToCart",
        payload: { options, quantity, id }
    }
}

export const removeFromCart = (id) => {
    return {
        type: "removeFromCart",
        payload: { id }
    }
}

//리듀서 상태검사/변경
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "addToCart":
            return [...state, action.payload]
        case "removeFromCart":
            return state.filter((el) => action.payload.id !== el.id)
        default:
            return state
    }
}

//편집없이 읽기만
const menuReducer = (state = data.menu, action) => {
    return state
}

// 리듀서 하나로 묶기
const rootReducer = combineReducers({ cartReducer, menuReducer })

// 스토어로 보내기
export const store = legacy_createStore(rootReducer)