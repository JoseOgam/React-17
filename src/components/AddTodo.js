import { useState } from "react"
import { connect } from "react-redux"
import { addTodos } from '../redux/actions/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: todos =>dispatch(addTodos(todos))
    }
}

const ConnectedForm = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    var addTodo = (evt) => {
        evt.preventDefault();
        props.addTodos({
            type: addTodos,
            title,
            body
        })
        setTitle('')
        setBody('')
        
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input value={title} placeholder='title' onChange={(e)=>setTitle(e.target.value)} />
                <textarea value={body} placeholder='body' onChange={(e)=> setBody(e.target.value)} />
                <button>Add Todos</button>
            </form>
        </div>
    )
 }
const AddTodos = connect(null, mapDispatchToProps)(ConnectedForm)
export default AddTodos