import { connect } from "react-redux"
import Todo from "./ todo"

const mapStateToProps = (state) => {
    return { todos: state.todos}
}

const connectListTodos = ({todos, props}) => {
    return (
        todos.map((todo, index) => {
            return <Todo key={todo.title} todos={todo} index={index} remove={props.remove}/>
        })
    )
}
 
 const ListTodos = connect(mapStateToProps)(connectListTodos)
export default ListTodos