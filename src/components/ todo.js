const Todo = (props) => {
    return (
        <div>
            <h2>{props.index + 1}. { props.todo.title }</h2>  
            <p>{ props.todo.body }</p>  
           <button onClick={() => props.todo.remove(props.todo.title)}>remove</button>
        </div>
    )
}
export default Todo