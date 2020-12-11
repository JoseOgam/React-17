import { useState } from "react"

const AddTodos = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    var addTodo = (evt) => {
        evt.preventDefault();
        props.dispatch({
            type: 'ADD_TODOS',
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

export default AddTodos