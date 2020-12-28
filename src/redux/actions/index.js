import { ADD_TODO, REMOVE_TODO, SHOW_TODO } from "../constants/action-types"

export const addTodos = (payload) => {
    return { type: ADD_TODO, payload}
}

export const showTodos = (payload) => {
    return{type: SHOW_TODO, payload}
}

export const removeTodo = (payload) => {
    return {type:REMOVE_TODO, payload}
}