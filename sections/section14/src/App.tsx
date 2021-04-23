import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./App.css";

interface Todo {
   name: string;
}

function App() {
   // This todoList is implementing the interface of the TodoList items props
   const todoList = [
      { name: "Go to the bank" },
      { name: "Go to the grocery store" },
   ];

   const [todos, setTodos] = useState<Todo[]>(todoList);

   const onTodoHandler = (text: string) => {
      setTodos((prevTodos) => [...prevTodos, { name: text }]);
   };

   return (
      <div className="App">
         <h1>Todo List!</h1>
         <NewTodo onNewTodo={onTodoHandler} />
         {/* So todoList can be accepted as the items props */}
         <TodoList items={todos} />
      </div>
   );
}

export default App;
