import { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import ListTodos from "./components/ListTodos";

import todosReducer from "./redux/reducers/index";
const { default: AddTodos } = require("./components/AddTodo");

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

function ConnectedApp() {
  const [todos, dispatch] = useReducer(todosReducer)
  const remove = (title) => {
    dispatch({
      type: 'REMOVE_TODOS',
      title
    })
  }
  useEffect(() => {
    var todoInfo = JSON.parse(localStorage.getItem('todos'))
    if (todoInfo)
    {
      dispatch({
        type: 'SHOW_TODOS',
        todos: todoInfo
      })
    }
  },[])
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  return (
    <div className="App">
      <h1>React Todo</h1>
      <ListTodos todos={todos} remove={remove}/>
      <AddTodos dispatch={dispatch} />
    </div>
  );
}
const App = connect(mapStateToProps)(ConnectedApp)
export default App;
