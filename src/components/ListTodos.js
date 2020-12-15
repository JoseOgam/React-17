import Todo from "./ todo"
const ListTodos = (props) => {
    return (
        props.todos.map((todo, index) => {
            return <Todo key={todo.title} todos={todo} index={index} remove={props.remove}/>
        })
    )
 }
export default ListTodos