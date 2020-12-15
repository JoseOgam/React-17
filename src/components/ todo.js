const Todo = (props) => {
    return (
        <div>
            <h2>{props.index + 1}. { props.todos.title }</h2>  
            <p>{ props.todos.body }</p>  
            <button onClick={()=>props.remove(props.todos.title)}>Delete Todo</button>
        </div>
    )
}
export default Todo