import React, { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";
import CornerIcons from "./components/CornerIcons";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos]);
  };

  return (
    <div className="App">
      <TodoHeader />
      <CornerIcons />
      <div className="todo-container">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onRemoveTodo={removeTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
