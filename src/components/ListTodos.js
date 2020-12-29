import { connect } from "react-redux"
// import Todo from "./ todo"

const mapStateToProps = (state) => {
    return { todos: state.todos}
}

const connectListTodos = ({todos}) => (
    <ul>
           { todos.map((todo) => (
               
               <div>
                   <li key={ todo.title } >{ todo.title }</li>
                   <p key={todo.body}>{ todo.body }</p>
               </div>
        ))}
    </ul>
    
    )

 
 const ListTodos = connect(mapStateToProps)(connectListTodos)
export default ListTodos