import React, { useState } from "react";
import Header from "./Header";
import InputToDo from "./InputToDo";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy Biscuit", status: false },

    { id: 2, text: "Study React", status: false },
  ]);
  return (
    <div className="todo_container">
      <NavBar />
      <div className="todo-box">
        <Header />
        <InputToDo setTodos={setTodos} todos={todos} />
        <ToDoList todos={todos} />
      </div>
    </div>
  );
};

export default TodoContainer;
