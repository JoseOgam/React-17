import { ADD_TODO, REMOVE_TODO } from "../constants/action-types"

const initialState = {
    todos: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload)
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => todo.title) !== action.title
            });

        //     case 'SHOW_TODOS':
        //         return action.todos;
        //     case 'ADD_TODOS':
        //         return [...state, { title: action.title, body: action.body }];
        //     case 'REMOVE_TODOS':
        //         return state.filter((todo)=> todo.title !== action.title)
        //     default:
        //     return state    
    
        default:
            return state
    }
}

export default rootReducer;