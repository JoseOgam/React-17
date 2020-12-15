import { useEffect, useReducer } from "react";
import ListTodos from "./components/ListTodos";
import todosReducer from "./store/todosReducer";
const { default: AddTodos } = require("./components/AddTodo");


function App() {
  const [todos, dispatch] = useReducer(todosReducer, [])
  const remove = (title) => {
    dispatch({
      type: 'REMOVE_TODOS',
      title
    })
  }
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

export default App;
