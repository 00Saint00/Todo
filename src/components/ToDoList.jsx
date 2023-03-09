import React from "react";
import TodoItem from "./TodoItem";

const ToDoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos?.map((item) => (
        <TodoItem item={item} />
      ))}
    </div>
  );
};

export default ToDoList;
