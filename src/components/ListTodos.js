import Todo from "./ todo"
const ListTodos = (props) => {
    return (
        props.todos.map((todo) => {
            return <Todo key={todo.title} todos={todo} />
        })
    )
 }
export default ListTodos