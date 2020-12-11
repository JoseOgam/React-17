const Todo = (props) => {
    return (
        <div>
            <h2>{ props.todos.title }</h2>  
            <p>{ props.todos.body }</p>  
            
        </div>
    )
}
export default Todo