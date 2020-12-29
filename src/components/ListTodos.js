import { connect } from "react-redux"
import Todo from "./ todo"

const mapStateToProps = (state) => {
    return { todos: state.todos}
}

const connectListTodos = ({ todos,props }) => {
    return (
           <div>
            { todos.map((todo,index) => {
               
                return (
                
                <Todo todo={ todo } key={todo.title} index={index} remove={props.remove}/>
            )
                
            }) }
          </div>
    )
}

 
 const ListTodos = connect(mapStateToProps)(connectListTodos)
export default ListTodos