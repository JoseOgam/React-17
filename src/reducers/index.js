const rootReducer = (state, action) => {
    switch (action.type)
    {
        case 'SHOW_TODOS':
            return action.todos;
        case 'ADD_TODOS':
            return [...state, { title: action.title, body: action.body }];
        case 'REMOVE_TODOS':
            return state.filter((todo)=> todo.title !== action.title)
        default:
        return state    
    }
}
export default rootReducer