import { connect } from "react-redux"
// import Todo from "./ todo"

const mapStateToProps = (state) => {
    return { todos: state.todos}
}

const connectListTodos = ({todos}) => (
    <ul>
           { todos.map((todo) => (
             <li key={todo.title} >{todo.title}</li>
        ))}
    </ul>
    
    )

 
 const ListTodos = connect(mapStateToProps)(connectListTodos)
export default ListTodos