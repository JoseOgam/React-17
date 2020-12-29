const Todo = (props) => {
    return (
        <div>
            <h2>{props.index + 1}. { props.todo.title }</h2>  
            <p>{ props.todo.body }</p>  
            <button >Delete Todo</button>
        </div>
    )
}
export default Todo