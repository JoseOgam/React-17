const { default: AddTodos } = require("./components/AddTodo");


function App() {
  return (
    <div className="App">
      <h1>React Todo</h1>
      <AddTodos />
    </div>
  );
}

export default App;
