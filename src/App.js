import { useReducer } from "react";
import ListTodos from "./components/ListTodos";
import todosReducer from "./store/todosReducer";
const { default: AddTodos } = require("./components/AddTodo");


function App() {
  const [todos, dispatch] = useReducer(todosReducer,[])
  return (
    <div className="App">
      <h1>React Todo</h1>
      <ListTodos todos={todos}/>
      <AddTodos dispatch={dispatch} />
    </div>
  );
}

export default App;
